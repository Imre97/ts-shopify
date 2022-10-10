 interface Itemrate {
    rate: number,
    count: number
  }
  
 export  interface ShopItem {
    id: number,
    category: string,
    description: string,
    title: string,
    price: number,
    image: string,
    rating: Itemrate
  }