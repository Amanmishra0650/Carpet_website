export function filterProducts(items,{query='',category='',city=''}={}){const q=query.trim().toLowerCase();return items.filter(p=>(!q||`${p.name} ${p.material} ${p.supplier}`.toLowerCase().includes(q))&&(!category||p.category===category)&&(!city||p.city===city));}
export const nextImage=(current,direction,length)=>(current+direction+length)%length;
const names=['Indoor Flocking Carpet','Heavy Floor Rug Woven Room Carpet','7 Color Options Cut Pile Carpet 1500 GSM','Multicolor Carpet For Prayer Halls','Polyester Heat Set Designed Carpet','PVC Plain Office Floor Carpet','Striped Modern Living Room Rug','Handwoven Natural Jute Carpet','Soft Grey Textured Floor Carpet','Traditional Persian Style Room Rug','Commercial Carpet Tiles','Premium Geometric Area Rug'];
const categories=['Office Carpet','Jute Carpets','Shag Carpet','Designer Carpet','Designer Carpet','Office Carpet','Designer Carpet','Jute Carpets','Shag Carpet','Tibetan Rug','Office Carpet','Turkish Carpet'];
const suppliers=['Lotus Floorworks Private Limited','Woven Nest International','Urban Loom Decor','Aarav Carpet House','Heritage Floor Studio','Metro Floor Solutions','Rug & Weave Co.','Earthloom Interiors','SoftStep Furnishings','Royal Knot Carpets','Modern Space Floors','The Rug Collective'];
export const products=names.map((name,i)=>({id:i+1,name,category:categories[i],supplier:suppliers[i],city:['Delhi','Delhi','Delhi','Delhi','Delhi','Delhi','Gurugram','Noida','Delhi','Ghaziabad','Faridabad','Delhi'][i],price:[120,150,95,70,150,65,210,180,110,450,85,320][i],material:['Polypropylene','Jute Hemp','Polypropylene','Polyester','Polyester','PVC','Cotton Blend','Jute','Wool Blend','Wool','Nylon','Polypropylene'][i],rating:[4.3,4.5,4.9,4.2,4.2,3.8,4.6,4.8,4.4,4.7,4.1,4.6][i],reviews:35+i*7,years:7+i,response:74+i%6*4,images:[0,1,2].map(v=>`/images/carpet-${i%6}-${v}.svg`),badge:i===0?'Leading Supplier':i===1?'Star Supplier':'',pattern:i%2?'Woven':'Printed'}));

// Additional fictional listings keep the default Delhi catalog varied.
const extraCarpets=[
 ['Ivory Diamond Living Room Carpet','Designer Carpet','Cotton Blend',240,'Ivory Loom Studio'],
 ['Premium Beige Turkish Carpet','Turkish Carpet','Polypropylene',380,'Anatolia Home Decor'],
 ['Soft Plush Bedroom Shag Rug','Shag Carpet','Polyester',195,'CloudStep Furnishings'],
 ['Natural Braided Round Jute Rug','Jute Carpets','Jute',175,'Nature Weave House'],
 ['Hand Knotted Tibetan Wool Carpet','Tibetan Rug','Wool',640,'Himalayan Knot Studio'],
 ['Durable Charcoal Office Carpet Tiles','Office Carpet','Nylon',90,'Workspace Floor Co.'],
 ['Rust Floral Traditional Area Carpet','Designer Carpet','Wool Blend',310,'Amber Heritage Rugs'],
 ['Contemporary Blue Geometric Rug','Designer Carpet','Polypropylene',225,'Blue Loom Interiors'],
 ['Luxury Maroon Turkish Floor Rug','Turkish Carpet','Polyester',420,'Imperial Weaves'],
 ['Cream High Pile Fluffy Carpet','Shag Carpet','Microfiber',260,'Cozy Corner Carpets'],
 ['Eco Style Woven Jute Runner','Jute Carpets','Jute Hemp',135,'Green Thread Decor'],
 ['Minimal Grey Commercial Floor Carpet','Office Carpet','PVC',75,'Urban Office Floors'],
 ['Handwoven Terracotta Accent Rug','Designer Carpet','Cotton',185,'Clay & Cotton Studio'],
 ['Classic Tibetan Medallion Carpet','Tibetan Rug','Wool',590,'Mountain Loom Collective'],
 ['Gold Border Premium Prayer Carpet','Designer Carpet','Polyester',145,'Golden Thread Carpets'],
 ['Sandstone Flatweave Dining Room Rug','Jute Carpets','Jute',205,'Everyday Earth Interiors'],
 ['Forest Green Soft Touch Area Rug','Shag Carpet','Polyester',285,'Evergreen Carpet House'],
 ['Patterned Turkish Hallway Runner','Turkish Carpet','Polypropylene',230,'Artisan Floor Gallery']
];
extraCarpets.forEach(([name,category,material,price,supplier],i)=>products.push({id:13+i,name,category,material,price,supplier,city:'Delhi',rating:[4.5,4.7,4.4,4.8,4.6,4.3][i%6],reviews:22+i*3,years:5+i%12,response:78+i%5*4,images:[0,1,2].map(v=>`/images/carpet-${(i+2)%6}-${v}.svg`),badge:i===4?'Star Supplier':'',pattern:i%2?'Woven':'Printed'}));
