/**
 * WordPress Composables
 * A collection of WordPress composable functions.
 */

import { Post } from "./../types/post";
import { ISuccessResponse } from "core/interfaces/success-response.interface";

export default () => {
  const config = useRuntimeConfig();
  
  const fetchData = async <T>(endpoint: string) =>{
    try {
    const result = await useFetch(`http://localhost:3066${endpoint}`)
    
    return (result.data.value as ISuccessResponse<T>).data
    } catch (error) {
      console.log(error)
    }
    
  }

  return {
    fetchData
  };
};
