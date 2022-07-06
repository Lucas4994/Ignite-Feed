import styles from './Post.module.css';

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://media-exp2.licdn.com/dms/image/C4D03AQFH_k5gT6Kzjg/profile-displayphoto-shrink_200_200/0/1617327170360?e=1661990400&v=beta&t=Sftu_3-hR7_-P73PiFb4E0GiJmX_kaV9OXNv_Xt8M34">
                    </img>
                    <div className={styles.authorInfo}>
                        <strong>Lucas Silva</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href=''>jane.design/doctorcare</a></p>
                <p>
                    <a href=''>#novoprojeto</a>{' '} 
                    <a href=''>#nlw</a>{' '}
                    <a href=''>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                 />

                 <footer>
                    <button type="submit">Publicar</button>
                 </footer>
            </form>
            
        </article>

    )
} 