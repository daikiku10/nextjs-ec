import { NextPage } from 'next';
import Head from 'next/head'
import TextInput from '../components/UIkit/TextInput';

// css
import 'tailwindcss/tailwind.css';

const HomePage: NextPage = () => {
  return (
    <div className="m-8 p-8 bg-gray-200 shadow-lg">
      <p className="font-bold text-4xl text-red-700">これはホームページです</p>
      <TextInput />
    </div>
  )
}

export default HomePage;