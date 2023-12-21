import routes from "../../../typing/constant/routes";
import styles from "./Head.module.css";
import HeadLink from "./head_link/HeadLink";

export default function Head(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.content + ' _global_content_class'}>

                <div className={styles.title_and_link_container + ' _global_flex_class'}>

                    <div className={styles.title_container}>
                        <p id={styles.title}>EnWord</p>
                    </div>

                    <div className={styles.links_container}>
                        {
                            routes.main.map(link => <HeadLink link={link} key={link.id}/>)
                        }
                    </div>


                </div>


                <div className={styles.login_links}>
                    {
                        routes.login.map(link => <HeadLink link={link} key={link.id}/>)
                    }
                </div>

            </div>
        </div>
    );
}
