import { citiesData } from "@/data/cities"
export default async function sitemap(){
    const cities = Object.keys(citiesData).map(id => ({
        id,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/cities/${id}`
      }));
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`
        },
        ...cities,
    ]
}