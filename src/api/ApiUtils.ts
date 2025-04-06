import axios, { AxiosRequestConfig } from 'axios';
 
import { ERROR_MESSAGE } from "../common/Error";

export async function apiRequest(
  url: string,
  method: "GET" | "POST" | "DELETE",
  body?: object,
  retries = 3
): Promise<any> {
  // Use simple retry action if the first attemp fails
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log("🚀 ~ apiRequest2 ~ url:", url);

      const config: AxiosRequestConfig = {
        method,
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        data: body, // Axios automatically stringifies the body if it's an object
      };

      const response = await axios(config);

      console.log(`✅ API Call to ${url} was successful`);
      return response.data;
    } catch (error) {
      console.error(`❌ Attempt ${attempt} failed for ${url}:`, error);
      if (attempt === retries) {
        throw new Error(ERROR_MESSAGE.DEFAULT_API_ERROR);
      }
    }
  }
}

// Use the delay function to avoid being blocked by the Vercel's rate limiter
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}