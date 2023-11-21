type FetcherProps = {
  endpoint: string;
};

const fetcher = async <T>({ endpoint }: FetcherProps): Promise<T> => {
  const response = await fetch(endpoint, {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return await response.json();
};

export default fetcher;
