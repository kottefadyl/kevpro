import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import { ModeToggle } from '@/compo-provider/ModeToggle';
import Hero from '@/app/[locale]/hero/hero';
import About from '@/app/[locale]/about/about';
import Recentpr from '@/app/[locale]/recentproject/recentpr';
import Servicepart from '@/app/[locale]/servicespart/servicepart';
import Getintouch from '@/app/[locale]/getintouch/getintouch';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <main>
        <section id='hero'><Hero/></section>
        <section id='about'><About/></section>
        <section id= 'recentproject'><Recentpr/></section>
        <section id='servicepart'><Servicepart/></section>
        <section id='getintouch'><Getintouch/></section>
      </main>
    </div>
  );
}