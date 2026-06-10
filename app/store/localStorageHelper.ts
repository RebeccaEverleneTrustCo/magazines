export const getItems = (key: string): any[] => {
  if (typeof window === "undefined") return [];

  try {
    const existingData = localStorage.getItem(key);
    const parsedData = existingData ? JSON.parse(existingData) : [];
    return Array.isArray(parsedData) ? parsedData : [];
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    return [];
  }
};

export const addItem = (key: string, item: string) => {
  const items = getItems(key);
  items.push(item);
  localStorage.setItem(key, JSON.stringify(items));
};

export const deleteItem = (key: string, id: string) => {
  const items = getItems(key);
  const filteredItems = items.filter((item) => item !== id);
  localStorage.setItem(key, JSON.stringify(filteredItems));
};
