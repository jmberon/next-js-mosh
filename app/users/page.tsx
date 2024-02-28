import axios from 'axios'
import React, { Suspense } from 'react'
// import { InventoryItem } from '../models/inventory';
import UserTable from './UserTable';
import Link from 'next/link';

// interface InventoryItemCardProps {
//   item: InventoryItem;
// }

// const inventory: InventoryItem[] = [
//   {
//     id: 1,
//     name: "Spark Plug Set",
//     category: "engine",
//     description: "High-quality spark plugs for improved engine performance.",
//     price: 12.99,
//     rating: 4,
//     imageUrl: "https://i.ebayimg.com/images/g/U08AAOSwV4xjZq-h/s-l1200.jpg",
//   },
//   {
//     id: 2,
//     name: "Brake Pad Kit",
//     category: "brake",
//     description: "Durable brake pads for safe and reliable braking.",
//     price: 39.99,
//     rating: 5,
//     imageUrl: "https://www.4wdindustries.com.au/assets/full/0603BAB0023KT.png?20210824181545",
//   },
//   {
//     id: 3,
//     name: "Front Strut Assembly",
//     category: "suspension",
//     description: "Complete front strut assembly for improved handling.",
//     price: 79.99,
//     rating: 4,
//     imageUrl: "https://suspensionmegastore.com.au/wp-content/uploads/2017/03/Strut-assy-2.png",
//   },
//   {
//     id: 4,
//     name: "Starter Motor",
//     category: "electrical",
//     description: "Reliable starter motor for easy engine starts.",
//     price: 59.99,
//     rating: 4,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKMOY6o-OvyLJ8wmX3uEXwdjpMH0WAZTnEMAv17_muVNUIbT7qCSd43DuSgcaa2XpMiE&usqp=CAU",
//   },
//   {
//     id: 5,
//     name: "Brake Rotor Set",
//     category: "brake",
//     description: "High-performance brake rotors for enhanced stopping power.",
//     price: 69.99,
//     rating: 5,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEeyVSoSjBDDPStJ8n9MhZER33pxG2XrwRQA&usqp=CAU",
//   },
//   {
//     id: 6,
//     name: "Power Steering Pump",
//     category: "suspension",
//     description: "Efficient power steering pump for smooth steering.",
//     price: 54.99,
//     rating: 3,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn35W7QU7CyHz8Blj3-7oa4LiYyelaDsOY0FCHpG03KKhlyX_dxFRZeQ3uBMt1bFZqtI4&usqp=CAU",
//   },
//   {
//     id: 7,
//     name: "Car Battery",
//     category: "electrical",
//     description: "High-capacity car battery for reliable power supply.",
//     price: 69.99,
//     rating: 5,
//     imageUrl: "https://m.media-amazon.com/images/I/21KC57NW1lL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
//   },
//   {
//     id: 8,
//     name: "Cabin Air Filter (Pack of 2)",
//     category: "engine",
//     description: "Cabin air filters for clean and fresh air in your car.",
//     price: 11.99,
//     rating: 4,
//     imageUrl: "https://m.media-amazon.com/images/I/31p5+miVR5L.jpg",
//   },
//   {
//     id: 9,
//     name: "Shock Absorber Set",
//     category: "suspension",
//     description: "Dampen road shocks with these high-quality shock absorbers.",
//     price: 64.99,
//     rating: 4,
//     imageUrl: "https://www.plumkrazygarage.com.au/cdn/shop/products/monroesensatrac.png?v=1619877700",
//   },
//   {
//     id: 10,
//     name: "Oxygen Sensor",
//     category: "engine",
//     description: "Precision oxygen sensor for efficient fuel combustion.",
//     price: 29.99,
//     rating: 4,
//     imageUrl: "https://i.ebayimg.com/images/g/k2UAAOSwyq5iUbjx/s-l1200.jpg",
//   }
// ];

// const InventoryItemCard = (props: InventoryItemCardProps) => {
    
//   // const { addToCart/*, cartItems*/ } = React.useContext(ShoppingCartContext);

//   // if current product is in cartItems, get the quantity
//   // const productQuantity = React.useMemo(() => cartItems.find((i) => i.id === props.item.id)?.quantity || 0, [cartItems, props.item.id]);
//   // const onAddToCart = async function() {
//   //   'use server'
//   //   console.log('onAddToCart');
//   // }

//   const { item } = props;

//   return (
//     <div>
//       <div className="h-60">
//         <img
//           src={item.imageUrl}
//           alt="card-image"
//           className="h-full w-full object-cover"
//         />
//       </div>
//       <div>
//         <h2 color="blue-gray" className="font-medium">
//           {item.name}
//         </h2>
//         <h3 color="blue-gray" className="font-semibold">
//           $ {item.price}
//         </h3>        
//         <p            
//           color="gray"
//           className="font-normal opacity-75"
//         >
//           {item.description}
//         </p>        
//         {/* <Rating value={item.rating} readonly className='mt-2'/> */}
//       </div>
//       <h2 className="pt-0">
//         <button 
//           className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
//           // action={() => console.log(item)}
//         >
//           Add to Cart
//         </button>
//       </h2>
//     </div>
//   );
// }

interface Props {
  searchParams: { sortOrder: string }
}

const UsersPage = async ({searchParams : { sortOrder }}: Props) => {

  async function onSubmit(formData: FormData) {
    'use server'
 
    // const rawFormData = {
    //   customerId: formData.get('customerId'),
    //   amount: formData.get('amount'),
    //   status: formData.get('status'),
    // }
    console.log('formData', formData);
    console.log('');

    const url = "https://spenda-cappoc.au.auth0.com/oauth/token";
    const data = {
      client_id: "ybdPyC1w3Ux2vKUx9084IjUKoy5apjST",
      client_secret: "qTcRWCDtzP-soTpNCXXgav1-9n3_R68niIGZeF41vEq0ypru1nZsQfje4Ma3dlPi",
      audience: "https://spenda-developer-cappoc-api",
      grant_type: "client_credentials"
    };

    axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("Request failed with error:", error.message);
      });

    
    // mutate data
    // revalidate cache
  }

  return (
    <div>
      <h1>Users</h1>
      <Link href='/users/new' className='btn'>New User</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
      
      {/* <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {inventory.map((item: InventoryItem) => {
          return (
            <InventoryItemCard item={item} key={item.id} />
          );
        })}
      </div>
      <form action={onSubmit}>
        <button className='border p-2 rounded' type="submit">
          GetToken
        </button>
      </form> */}
    </div>
  )
}

export default UsersPage
