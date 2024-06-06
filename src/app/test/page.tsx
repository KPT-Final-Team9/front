import axios from 'axios';
export default async function Page() {
  try {
    const res = await axios.get('http://localhost:3000/api/mock');
    console.log(res);
    return (
      <div>
        <p>{res.data.hello}</p>
      </div>
    );
  } catch (err) {
    err;
  }
}
