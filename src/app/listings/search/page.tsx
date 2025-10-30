import { redirect } from 'next/navigation';

export default function ListingsSearchRedirect() {
  // Legacy route: redirect to consolidated listings page with advanced search
  redirect('/listings');
}


