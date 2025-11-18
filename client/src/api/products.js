const API_BASE="http://localhost:5000/api";

export async function getCategories(){
    const res=await fetch(`${API_BASE}/categories`);
    return res.json();
}

export async function getProductsByCategory(category){
    const res=await fetch(`${API_BASE}/products/${category}`);
    return res.json();
}