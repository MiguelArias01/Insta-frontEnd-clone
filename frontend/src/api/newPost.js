import api from './apiConfig';

export default async function createPost(file, caption) {
  const formData = new FormData();
  formData.append('id', 15);
  formData.append('image', file);
  formData.append('caption', caption);

  const response = await api.post(`api/create-post/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return response.data;
}