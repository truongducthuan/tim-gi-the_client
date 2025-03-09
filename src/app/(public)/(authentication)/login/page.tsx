import dynamic from 'next/dynamic';

const FormComponent = dynamic(() => import('@/features/authentication/components/Form'), {
  ssr: false,
});


const Page = () => {

  return (
    <div>
      <FormComponent isLogin={true} />
    </div>
  )
}

export default Page