import Image from "next/image";
import styles from './page.module.css'
import Hero from '../../public/hero.png';
import Button from "@/components/button/Button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.Item}>
        <h1 className={styles.title}>
          Better design for you digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.Item}>
        <Image src={Hero} alt="" className={styles.img}/>
      </div>
    </div>



  );
}
