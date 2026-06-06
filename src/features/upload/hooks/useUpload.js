import { useCallback, useState } from 'react'
import { useUploadImageMutation, useUploadImagesMutation, useDeleteFileMutation } from '../uploadApi'

export function useUpload(folder = 'general') {
  const [uploadSingleMutation, { isLoading: isSingleUploading }] = useUploadImageMutation()
  const [uploadMultipleMutation, { isLoading: isMultiUploading }] = useUploadImagesMutation()
  const [deleteMutation, { isLoading: isDeleting }] = useDeleteFileMutation()
  const [previews, setPreviews] = useState([])
  const [results, setResults] = useState([])

  const uploadSingle = useCallback(async (file) => {
    const previewUrl = URL.createObjectURL(file)
    setPreviews([previewUrl])
    try {
      const res = await uploadSingleMutation({ file, folder }).unwrap()
      const result = res?.data ?? res
      setResults([result])
      URL.revokeObjectURL(previewUrl)
      return result
    } catch { setPreviews([]); return null }
  }, [uploadSingleMutation, folder])

  const uploadMultiple = useCallback(async (files) => {
    const urls = files.map((f) => URL.createObjectURL(f))
    setPreviews(urls)
    try {
      const res = await uploadMultipleMutation({ files, folder }).unwrap()
      const uploadResults = res?.data ?? res
      setResults(uploadResults)
      urls.forEach((u) => URL.revokeObjectURL(u))
      return uploadResults
    } catch { setPreviews([]); return [] }
  }, [uploadMultipleMutation, folder])

  const deleteFile = useCallback(async (publicId) => {
    await deleteMutation(publicId).unwrap()
    setResults((prev) => prev.filter((r) => r.publicId !== publicId))
  }, [deleteMutation])

  return {
    uploadSingle, uploadMultiple, deleteFile,
    previews, results,
    isUploading: isSingleUploading || isMultiUploading,
    isDeleting,
  }
}
