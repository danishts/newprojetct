// import React from 'react'
// import {firestore} from "../Firebase";
// import {addDoc,collection} from "@firebase/firestore"

// export default function Table() {


// let data 

//   return (
//     <div>
//     <h1>Actions</h1>
//     <div class="form-container"> 
  
//   <table>
//   <thead>
//     <tr>
//       <th scope="col" my-3>#</th>
//       <th scope="col">Image</th>
//       <th scope="col"my-3>First</th>
//       <th scope="col"my-3>Last</th>
//       <th scope="col"my-3>Handle</th>
//       {/* <th scope="col"my-6>action</th> */}
//       {/* <th scope="col" colspan="3" align='center'>Actions</th> */}
//     <th scope="col" colspan="3" style={{ textAlign: 'center' }}>Actions</th>



//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row"my-3>1</th>
//       <td><img src={"1.png"} alt="df"/></td>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//       <td><button>Delete</button></td>
//       <td><button>Edit</button></td>   
//       <td><button>Save</button></td>   
//     </tr>
//     <tr>
//       <th scope="row"my-3>2</th>
//       <td><img src={"2.jpg"} alt="1"/></td>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//       <td><button>Delete</button></td>
//       <td><button>Edit</button></td>
//       <td><button>Save</button></td>
//     </tr>
//     <tr>
//       <th scope="row"my-3>3</th>
//       <td><img src={"3.jpg"} alt="1"/></td>
//       <td colspan>Larry the Bird</td>
//       <td>Thornton</td>
//       <td>@twitter</td>
//       <td><button>Delete</button></td>
//       <td><button>Edit</button></td>
//       <td><button>Save</button></td>
//     </tr>
//   </tbody>
//   </table>

// </div>
     


//     </div>
//   )
// }


// idr sy aagy likha





// import React, { useState } from 'react';

// import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

// export default function Table() {
//     const [users, setUsers] = useState([
//         { id: 1, imageUrl: '1.png', firstName: 'Mark', lastName: 'Otto', handle: '@mdo' },
//         { id: 2, imageUrl: '2.jpg', firstName: 'Jacob', lastName: 'Thornton', handle: '@fat' },
//         { id: 3, imageUrl: '3.jpg', firstName: 'Larry', lastName: 'Thornton', handle: '@twitter' }
//     ]);

//     const deleteUser = async (id) => {
//         await deleteDoc(doc(firestore, 'users', id));
//         setUsers(users.filter(user => user.id !== id));
//     };

//     const updateUser = async (id, newData) => {
//         await updateDoc(doc(firestore, 'users', id), newData);
//         setUsers(users.map(user => user.id === id ? newData : user));
//     };

//     const saveUser = async (id) => {
//         // Here you would typically save the changes made to the user data
//         // For demonstration purposes, we're simply logging the updated data
//         console.log('Save user with ID:', id);
//     };

//     return (
//         <div>
//             <h1>Actions</h1>
//             <div className="form-container">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Image</th>
//                             <th scope="col">First</th>
//                             <th scope="col">Last</th>
//                             <th scope="col">Handle</th>
//                             <th scope="col" colSpan="3" style={{ textAlign: 'center' }}>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, index) => (
//                             <tr key={user.id}>
//                                 <th scope="row">{index + 1}</th>
//                                 <td><img src={user.imageUrl} alt="user" /></td>
//                                 <td contentEditable={true} onBlur={(e) => updateUser(user.id, { ...user, firstName: e.target.innerText })}>{user.firstName}</td>
//                                 <td>{user.lastName}</td>
//                                 <td>{user.handle}</td>
//                                 <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
//                                 <td><button>Edit</button></td>
//                                 <td><button onClick={() => saveUser(user.id)}>Save</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }





























// import React, { useState } from 'react';
// import { getFirestore, addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';




// // Initialize Firestore
// const firestore = getFirestore();

// export default function Table() {
//     const [users, setUsers] = useState([
//         { id: 1, imageUrl: '1.png', firstName: 'Mark', lastName: 'Otto', handle: '@mdo' },
//         { id: 2, imageUrl: '2.jpg', firstName: 'Jacob', lastName: 'Thornton', handle: '@fat' },
//         { id: 3, imageUrl: '3.jpg', firstName: 'Larry', lastName: 'Thornton', handle: '@twitter' }
//     ]);

//     const deleteUser = async (id) => {
//         await deleteDoc(doc(firestore, 'users', id));
//         setUsers(users.filter(user => user.id !== id));
//     };

//     const updateUser = async (id, newData) => {
//         await updateDoc(doc(firestore, 'users', id), newData);
//         setUsers(users.map(user => user.id === id ? newData : user));
//     };

//     const saveUser = async (id) => {
//         // Here you would typically save the changes made to the user data
//         // For demonstration purposes, we're simply logging the updated data
//         console.log('Save user with ID:', id);
//     };

//     return (
//         <div>
//             <h1>Actions</h1>
//             <div className="form-container">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Image</th>
//                             <th scope="col">First</th>
//                             <th scope="col">Last</th>
//                             <th scope="col">Handle</th>
//                             <th scope="col" colSpan="3" style={{ textAlign: 'center' }}>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, index) => (
//                             <tr key={user.id}>
//                                 <th scope="row">{index + 1}</th>
//                                 <td><img src={user.imageUrl} alt="user" /></td>
//                                 <td contentEditable={true} onBlur={(e) => updateUser(user.id, { ...user, firstName: e.target.innerText })}>{user.firstName}</td>
//                                 <td>{user.lastName}</td>
//                                 <td>{user.handle}</td>
//                                 <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
//                                 <td><button>Edit</button></td>
//                                 <td><button onClick={() => saveUser(user.id)}>Save</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }



















// import React, { useState } from 'react';
// import { collection, addDoc, deleteDoc, doc, updateDoc } from '@firebase/firestore';
// import { firestore } from '../Firebase';

// export default function Table() {
//     const [users, setUsers] = useState([
//         { id: 1, imageUrl: '1.png', firstName: 'Mark', lastName: 'Otto', handle: '@mdo' },
//         { id: 2, imageUrl: '2.jpg', firstName: 'Jacob', lastName: 'Thornton', handle: '@fat' },
//         { id: 3, imageUrl: '3.jpg', firstName: 'Larry', lastName: 'Thornton', handle: '@twitter' }
//     ]);

//     const [editingUserId, setEditingUserId] = useState(null); // State to track the user currently being edited

//     const deleteUser = async (id) => {
//         try {
//             const userRef = doc(firestore, 'users', id);
//             await deleteDoc(userRef);
//             setUsers(users.filter(user => user.id !== id));
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     const updateUser = async (id, newData) => {
//         try {
//             const userRef = doc(firestore, 'users', id);
//             await updateDoc(userRef, newData);
//             setUsers(users.map(user => user.id === id ? newData : user));
//             setEditingUserId(null); // Clear editing state after update
//         } catch (error) {
//             console.error('Error updating user:', error);
//         }
//     };

//     const saveUser = async (id) => {
//         console.log('Save user with ID:', id);
//     };

//     const handleEditClick = (id) => {
//         setEditingUserId(id); // Set the ID of the user to be edited
//     };

//     return (
//         <div>
//             <h1>Actions</h1>
//             <div className="form-container">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Image</th>
//                             <th scope="col">First</th>
//                             <th scope="col">Last</th>
//                             <th scope="col">Handle</th>
//                             <th scope="col" colSpan="3" style={{ textAlign: 'center' }}>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, index) => (
//                             <tr key={user.id}>
//                                 <th scope="row">{index + 1}</th>
//                                 <td><img src={user.imageUrl} alt="user" /></td>
//                                 {editingUserId === user.id ? ( // Check if the row is being edited
//                                     <>
//                                         <td><input type="text" value={user.firstName} onChange={(e) => updateUser(user.id, { ...user, firstName: e.target.value })} /></td>
//                                         <td><input type="text" value={user.lastName} onChange={(e) => updateUser(user.id, { ...user, lastName: e.target.value })} /></td>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <td>{user.firstName}</td>
//                                         <td>{user.lastName}</td>
//                                     </>
//                                 )}
//                                 <td>{user.handle}</td>
//                                 <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
//                                 <td><button onClick={() => handleEditClick(user.id)}>Edit</button></td>
//                                 <td><button onClick={() => saveUser(user.id)}>Save</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }










































// GOOOD EDIT BUTTTON OK




// import React, { useState } from 'react';
// import { collection, addDoc, deleteDoc, doc, updateDoc } from '@firebase/firestore';
// import { firestore } from '../Firebase';

// export default function Table() {
//     const [users, setUsers] = useState([
//         { id: 1, imageUrl: '1.png', firstName: 'Mark', lastName: 'Otto', handle: '@mdo', date: '2022-03-20' },
//         { id: 2, imageUrl: '2.jpg', firstName: 'Jacob', lastName: 'Thornton', handle: '@fat', date: '2022-03-21' },
//         { id: 3, imageUrl: '3.jpg', firstName: 'Larry', lastName: 'Thornton', handle: '@twitter', date: '2022-03-22' }
//     ]);

//     const [editingUserId, setEditingUserId] = useState(null); // State to track the user currently being edited

//     const deleteUser = async (id) => {
//         try {
//             const userRef = doc(firestore, 'users', id);
//             await deleteDoc(userRef);
//             setUsers(users.filter(user => user.id !== id));
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     const updateUser = async (id, newData) => {
//         try {
//             const userRef = doc(firestore, 'users', id);
//             await updateDoc(userRef, newData);
//             setUsers(users.map(user => user.id === id ? newData : user));
//             setEditingUserId(null); // Clear editing state after update
//         } catch (error) {
//             console.error('Error updating user:', error);
//         }
//     };

//     const saveUser = async (id) => {
//         console.log('Save user with ID:', id);
//     };

//     const handleEditClick = (id) => {
//         setEditingUserId(id); // Set the ID of the user to be edited
//     };

//     return (
//         <div>
//             <h1>Actions</h1>
//             <div className="form-container">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Image</th>
//                             <th scope="col">First</th>
//                             <th scope="col">Last</th>
//                             <th scope="col">Date</th>
//                             <th scope="col">Handle</th>
//                             <th scope="col" colSpan="3" style={{ textAlign: 'center' }}>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, index) => (
//                             <tr key={user.id}>
//                                 <th scope="row">{index + 1}</th>
//                                 <td><img src={user.imageUrl} alt="user" /></td>
//                                 <td>{editingUserId === user.id ? (
//                                     <input type="text" value={user.firstName} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, firstName: e.target.value } : u))} />
//                                 ) : user.firstName}</td>
//                                 <td>{editingUserId === user.id ? (
//                                     <input type="text" value={user.lastName} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, lastName: e.target.value } : u))} />
//                                 ) : user.lastName}</td>
//                                 <td>{editingUserId === user.id ? (
//                                     <input type="text" value={user.date} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, date: e.target.value } : u))} />
//                                 ) : user.date}</td>
//                                 <td>{user.handle}</td>
//                                 <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
//                                 <td><button onClick={() => handleEditClick(user.id)}>Edit</button></td>
//                                 <td><button onClick={() => saveUser(user.id)}>Save</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }




 












// import React, { useState } from 'react';
// import { collection, addDoc, deleteDoc, doc, updateDoc } from '@firebase/firestore';
// import { firestore } from '../Firebase';

// export default function Table() {
//     const [users, setUsers] = useState([
//         { id: 1, imageUrl: '1.png', firstName: 'Mark', lastName: 'Otto', handle: '@mdo', date: '2022-03-20' },
//         { id: 2, imageUrl: '2.jpg', firstName: 'Jacob', lastName: 'Thornton', handle: '@fat', date: '2022-03-21' },
//         { id: 3, imageUrl: '3.jpg', firstName: 'Larry', lastName: 'Thornton', handle: '@twitter', date: '2022-03-22' }
//     ]);

//     const [editingUserId, setEditingUserId] = useState(null); // State to track the user currently being edited

//     const deleteUser = async (id) => {
//         try {
//             const userRef = doc(firestore, 'users', id);
//             await deleteDoc(userRef);
//             setUsers(users.filter(user => user.id !== id));
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     const updateUser = async (id, newData) => {
//         try {
//             const userRef = doc(firestore, 'users', id);
//             await updateDoc(userRef, newData);
//             setUsers(users.map(user => user.id === id ? newData : user));
//             setEditingUserId(null); // Clear editing state after update
//         } catch (error) {
//             console.error('Error updating user:', error);
//         }
//     };

//     const saveUser = async (id, newData) => {
//         try {
//             const userRef = doc(firestore, 'users', id);
//             console.log('Saving user data:', newData);
//             await updateDoc(userRef, newData);
//             console.log('User data saved successfully.');
//             alert('Your data has been saved.');
//         } catch (error) {
//             console.error('Error saving user:', error);
//             alert('YOUR DATA HAVE BEEN SAVED.');
//         }
//     };

//     const handleEditClick = (id) => {
//         setEditingUserId(id); // Set the ID of the user to be edited
//     };

//     return (
//         <div>
//             <h1>Actions</h1>
//             <div className="form-container">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Image</th>
//                             <th scope="col">First</th>
//                             <th scope="col">Last</th>
//                             <th scope="col">Date</th>
//                             <th scope="col">Handle</th>
//                             <th scope="col" colSpan="3" style={{ textAlign: 'center' }}>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, index) => (
//                             <tr key={user.id}>
//                                 <th scope="row">{index + 1}</th>
//                                 <td><img src={user.imageUrl} alt="user" /></td>
//                                 <td>{editingUserId === user.id ? (
//                                     <input type="text" value={user.firstName} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, firstName: e.target.value } : u))} />
//                                 ) : user.firstName}</td>
//                                 <td>{editingUserId === user.id ? (
//                                     <input type="text" value={user.lastName} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, lastName: e.target.value } : u))} />
//                                 ) : user.lastName}</td>
//                                 <td>{editingUserId === user.id ? (
//                                     <input type="text" value={user.date} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, date: e.target.value } : u))} />
//                                 ) : user.date}</td>
//                                 <td>{user.handle}</td>
//                                 <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
//                                 <td><button onClick={() => handleEditClick(user.id)}>Edit</button></td>
//                                 <td><button onClick={() => saveUser(user.id, user)}>Save</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }














































// code ok  hai

// import React, { useState } from 'react';
// import { collection, addDoc, deleteDoc, doc, updateDoc } from '@firebase/firestore';
// import { firestore } from '../Firebase';

// export default function Table() {
//     const [users, setUsers] = useState([
//         { id: 1, imageUrl: '1.png', firstName: 'Mark', lastName: 'Otto', handle: '@mdo', date: '2022-03-20' },
//         { id: 2, imageUrl: '2.jpg', firstName: 'Jacob', lastName: 'Thornton', handle: '@fat', date: '2022-03-21' },
//         { id: 3, imageUrl: '3.jpg', firstName: 'Larry', lastName: 'Thornton', handle: '@twitter', date: '2022-03-22' }
//     ]);

//     const [editingUserId, setEditingUserId] = useState(null); // State to track the user currently being edited

//     const deleteUser = async (id) => {
//         try {
//             const userRef = doc(firestore, 'users', id);
//             await deleteDoc(userRef);
//             setUsers(users.filter(user => user.id !== id));
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     const updateUser = async (id, newData) => {
//         try {
//             const userRef = doc(firestore, 'users', id);
//             await updateDoc(userRef, newData);
//             setUsers(users.map(user => user.id === id ? newData : user));
//             setEditingUserId(null); // Clear editing state after update
//         } catch (error) {
//             console.error('Error updating user:', error);
//         }
//     };

//     const saveUser = async (id, newData) => {
//         try {
//             const userRef = doc(firestore, 'users', id);
//             await updateDoc(userRef, newData);
//             alert('Your data has been saved.');
//         } catch (error) {
//             console.error('Error saving user:', error);
//             alert('Error saving user data. Please check the console for details.');
//         }
//     };

//     const handleEditClick = (id) => {
//         setEditingUserId(id); // Set the ID of the user to be edited
//     };

//     const handleImageChange = (event, id) => {
//         const file = event.target.files[0];
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             const imageUrl = reader.result;
//             setUsers(users.map(user => user.id === id ? { ...user, imageUrl } : user));
//         };
//         reader.readAsDataURL(file);
//     };

//     return (
//         <div>
//             <h1>Actions</h1>
//             <div className="form-container">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Image</th>
//                             <th scope="col">First</th>
//                             <th scope="col">Last</th>
//                             <th scope="col">Date</th>
//                             <th scope="col">Handle</th>
//                             <th scope="col" colSpan="3" style={{ textAlign: 'center' }}>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, index) => (
//                             <tr key={user.id}>
//                                 <th scope="row">{index + 1}</th>
//                                 <td>
//                                     {editingUserId === user.id ? (
//                                         <input type="file" onChange={(event) => handleImageChange(event, user.id)} accept="image/*" />
//                                     ) : (
//                                         <img src={user.imageUrl} alt="user" />
//                                     )}
//                                 </td>
//                                 <td>{editingUserId === user.id ? (
//                                     <input type="text" value={user.firstName} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, firstName: e.target.value } : u))} />
//                                 ) : user.firstName}</td>
//                                 <td>{editingUserId === user.id ? (
//                                     <input type="text" value={user.lastName} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, lastName: e.target.value } : u))} />
//                                 ) : user.lastName}</td>
//                                 <td>{editingUserId === user.id ? (
//                                     <input type="text" value={user.date} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, date: e.target.value } : u))} />
//                                 ) : user.date}</td>
//                                 <td>{user.handle}</td>
//                                 <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
//                                 <td><button onClick={() => handleEditClick(user.id)}>Edit</button></td>
//                                 <td><button onClick={() => saveUser(user.id, user)}>Save</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }














// import React, { useState } from 'react';
// import { collection, addDoc, deleteDoc, doc, updateDoc } from '@firebase/firestore';
// import { firestore } from '../Firebase';

// export default function Table() {
//     const [users, setUsers] = useState([
//         { id: 1, imageUrl: '1.png', firstName: 'Mark', lastName: 'Otto', handle: '@mdo', date: '2022-03-20' },
//         { id: 2, imageUrl: '2.jpg', firstName: 'Jacob', lastName: 'Thornton', handle: '@fat', date: '2022-03-21' },
//         { id: 3, imageUrl: '3.jpg', firstName: 'Larry', lastName: 'Thornton', handle: '@twitter', date: '2022-03-22' }
//     ]);

//     const [editingUserId, setEditingUserId] = useState(null); // State to track the user currently being edited

//     const deleteUser = async (id) => {
//         try {
//             const userRef = doc(firestore, 'users', id);
//             await deleteDoc(userRef);
//             setUsers(users.filter(user => user.id !== id));
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     const updateUser = async (id, newData) => {
//         try {
//             const userRef = doc(firestore, 'users', id);
//             await updateDoc(userRef, newData);
//             setUsers(users.map(user => user.id === id ? newData : user));
//             setEditingUserId(null); // Clear editing state after update
//         } catch (error) {
//             console.error('Error updating user:', error);
//         }
//     };

//     const saveUser = async (id, newData) => {
//         try {
//             const userRef = doc(firestore, 'users', id);
//             if (id) {
//                 await updateDoc(userRef, newData);
//             } else {
//                 await addDoc(collection(firestore, 'users'), newData);
//             }
//             alert('Your data has been saved.');
//         } catch (error) {
//             console.error('Error saving user:', error);
//             alert('Error saving user data. Please check the console for details.');
//         }
//     };

//     const handleEditClick = (id) => {
//         setEditingUserId(id); // Set the ID of the user to be edited
//     };

//     const handleImageChange = (event, id) => {
//         const file = event.target.files[0];
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             const imageUrl = reader.result;
//             setUsers(users.map(user => user.id === id ? { ...user, imageUrl } : user));
//         };
//         reader.readAsDataURL(file);
//     };

//     return (
//         <div>
//             <h1>Actions</h1>
//             <div className="form-container">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Image</th>
//                             <th scope="col">First</th>
//                             <th scope="col">Last</th>
//                             <th scope="col">Date</th>
//                             <th scope="col">Handle</th>
//                             <th scope="col" colSpan="3" style={{ textAlign: 'center' }}>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, index) => (
//                             <tr key={user.id}>
//                                 <th scope="row">{index + 1}</th>
//                                 <td>
//                                     {editingUserId === user.id ? (
//                                         <input type="file" onChange={(event) => handleImageChange(event, user.id)} accept="image/*" />
//                                     ) : (
//                                         <img src={user.imageUrl} alt="user" />
//                                     )}
//                                 </td>
//                                 <td>{editingUserId === user.id ? (
//                                     <input type="text" value={user.firstName} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, firstName: e.target.value } : u))} />
//                                 ) : user.firstName}</td>
//                                 <td>{editingUserId === user.id ? (
//                                     <input type="text" value={user.lastName} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, lastName: e.target.value } : u))} />
//                                 ) : user.lastName}</td>
//                                 <td>{editingUserId === user.id ? (
//                                     <input type="text" value={user.date} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, date: e.target.value } : u))} />
//                                 ) : user.date}</td>
//                                 <td>{user.handle}</td>
//                                 <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
//                                 <td><button onClick={() => handleEditClick(user.id)}>Edit</button></td>
//                                 <td><button onClick={() => saveUser(user.id, user)}>Save</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }












// ok ha code


// import React, { useState } from 'react';
// import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
// import { firestore } from '../Firebase';

// export default function Table() {
//     const [users, setUsers] = useState([
//         { id: 1, imageUrl: '1.png', firstName: 'Mark', lastName: 'Otto', handle: '@mdo', date: '2022-03-20' },
//         { id: 2, imageUrl: '2.jpg', firstName: 'Jacob', lastName: 'Thornton', handle: '@fat', date: '2022-03-21' },
//         { id: 3, imageUrl: '3.jpg', firstName: 'Larry', lastName: 'Thornton', handle: '@twitter', date: '2022-03-22' }
//     ]);

//     const [editingUserId, setEditingUserId] = useState(null); // State to track the user currently being edited

//     const deleteUser = async (id) => {
//         try {
//             const userRef = doc(firestore, 'users', id);
//             await deleteDoc(userRef);
//             setUsers(users.filter(user => user.id !== id));
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     const updateUser = async (id, newData) => {
//         try {
//             const userRef = doc(firestore, 'users', id);
//             await updateDoc(userRef, newData);
//             setUsers(users.map(user => user.id === id ? newData : user));
//             setEditingUserId(null); // Clear editing state after update
//         } catch (error) {
//             console.error('Error updating user:', error);
//         }
//     };

//     const saveUser = async (id, newData) => {
//         try {
//             if (id) {
//                 const userRef = doc(firestore, 'users', id);
//                 await updateDoc(userRef, newData);
//             } else {
//                 const newUserRef = await addDoc(collection(firestore, 'users'), newData);
//                 setUsers(prevUsers => [...prevUsers, { ...newData, id: newUserRef.id }]);
//             }
//             alert('Your data has been saved.');
//         } catch (error) {
//             console.error('Error saving user:', error);
//             alert('Error saving user data. Please check the console for details.');
//         }
//     };

//     const handleEditClick = (id) => {
//         setEditingUserId(id); // Set the ID of the user to be edited
//     };

//     const handleImageChange = (event, id) => {
//         const file = event.target.files[0];
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             const imageUrl = reader.result;
//             setUsers(users.map(user => user.id === id ? { ...user, imageUrl } : user));
//         };
//         reader.readAsDataURL(file);
//     };

//     return (
//         <div>
//             <h1>Actions</h1>
//             <div className="form-container">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Image</th>
//                             <th scope="col">First</th>
//                             <th scope="col">Last</th>
//                             <th scope="col">Date</th>
//                             <th scope="col">Handle</th>
//                             <th scope="col" colSpan="3" style={{ textAlign: 'center' }}>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, index) => (
//                             <tr key={user.id}>
//                                 <th scope="row">{index + 1}</th>
//                                 <td>
//                                     {editingUserId === user.id ? (
//                                         <input type="file" onChange={(event) => handleImageChange(event, user.id)} accept="image/*" />
//                                     ) : (
//                                         <img src={user.imageUrl} alt="user" />
//                                     )}
//                                 </td>
//                                 <td>{editingUserId === user.id ? (
//                                     <input type="text" value={user.firstName} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, firstName: e.target.value } : u))} />
//                                 ) : user.firstName}</td>
//                                 <td>{editingUserId === user.id ? (
//                                     <input type="text" value={user.lastName} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, lastName: e.target.value } : u))} />
//                                 ) : user.lastName}</td>
//                                 <td>{editingUserId === user.id ? (
//                                     <input type="text" value={user.date} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, date: e.target.value } : u))} />
//                                 ) : user.date}</td>
//                                 <td>{user.handle}</td>
//                                 <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
//                                 <td><button onClick={() => handleEditClick(user.id)}>Edit</button></td>
//                                 <td><button onClick={() => saveUser(user.id, user)}>Save</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }








// ADD K BUTTON ADD KIA HA








import React, { useState } from 'react';
import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../Firebase';

export default function Table() {
    const [users, setUsers] = useState([
        { id: 1, imageUrl: '1.png', firstName: 'Mark', lastName: 'Otto', handle: '@mdo', date: '2022-03-20' },
        { id: 2, imageUrl: '2.jpg', firstName: 'Jacob', lastName: 'Thornton', handle: '@fat', date: '2022-03-21' },
        { id: 3, imageUrl: '3.jpg', firstName: 'Larry', lastName: 'Thornton', handle: '@twitter', date: '2022-03-22' }
    ]);
    const [editingUserId, setEditingUserId] = useState(null); // State to track the user currently being edited

    const deleteUser = async (id) => {
        try {
            const userRef = doc(firestore, 'users', id);
            await deleteDoc(userRef);
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const updateUser = async (id, newData) => {
        try {
            const userRef = doc(firestore, 'users', id);
            await updateDoc(userRef, newData);
            setUsers(users.map(user => user.id === id ? newData : user));
            setEditingUserId(null); // Clear editing state after update
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const saveUser = async (id, newData) => {
        try {
            if (id) {
                const userRef = doc(firestore, 'users', id);
                await updateDoc(userRef, newData);
            } else {
                const newUserRef = await addDoc(collection(firestore, 'users'), newData);
                setUsers(prevUsers => [...prevUsers, { ...newData, id: newUserRef.id }]);
            }
            alert('Your data has been saved.');
        } catch (error) {
            console.error('Error saving user:', error);
            alert('Error saving user data. Please check the console for details.');
        }
    };

    const handleEditClick = (id) => {
        setEditingUserId(id); // Set the ID of the user to be edited
    };

    const handleImageChange = (event, id) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageUrl = reader.result;
            setUsers(users.map(user => user.id === id ? { ...user, imageUrl } : user));
        };
        reader.readAsDataURL(file);
    };

    const handleAddUser = () => {
        const newUser = {
            id: users.length + 1, // Generate a new ID for the user
            imageUrl: '', // Set default values for other attributes
            firstName: '',
            lastName: '',
            handle: '',
            date: ''
        };
        setUsers([...users, newUser]);
        setEditingUserId(newUser.id); // Start editing the newly added user
    };

    const handleDeleteUser = async (id) => {
        try {
            await deleteUser(id);
            alert('User deleted successfully.');
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Error deleting user. Please check the console for details.');
        }
    };

    return (
        <div>
            <h1>Actions</h1>
            <div className="form-container">
                
                <table>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Date</th>
                            <th scope="col">Handle</th>
                            <th scope="col" colSpan="4" style={{ textAlign: 'center' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    {editingUserId === user.id ? (
                                        <input type="file" onChange={(event) => handleImageChange(event, user.id)} accept="image/*" />
                                    ) : (
                                        <img src={user.imageUrl} alt="user" />
                                    )}
                                </td>
                                <td>{editingUserId === user.id ? (
                                    <input type="text" value={user.firstName} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, firstName: e.target.value } : u))} />
                                ) : user.firstName}</td>
                                <td>{editingUserId === user.id ? (
                                    <input type="text" value={user.lastName} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, lastName: e.target.value } : u))} />
                                ) : user.lastName}</td>
                                <td>{editingUserId === user.id ? (
                                    <input type="text" value={user.date} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, date: e.target.value } : u))} />
                                ) : user.date}</td>
                                <td>{editingUserId === user.id ? (
                                    <input type="text" value={user.handle} onChange={(e) => setUsers(users.map(u => u.id === user.id ? { ...u, handle: e.target.value } : u))} />
                                ) : user.handle}</td>
                                <td><button onClick={() => handleDeleteUser(user.id)}>Delete</button></td>
                                <td><button onClick={() => handleEditClick(user.id)}>Edit</button></td>
                                <td><button onClick={() => saveUser(user.id, user)}>Save</button></td>
                                <td> <button onClick={handleAddUser}>Add User</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
