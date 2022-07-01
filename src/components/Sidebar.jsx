import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'>
            </img>

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://media-exp2.licdn.com/dms/image/C4D03AQFH_k5gT6Kzjg/profile-displayphoto-shrink_200_200/0/1617327170360?e=1661990400&v=beta&t=Sftu_3-hR7_-P73PiFb4E0GiJmX_kaV9OXNv_Xt8M34" />

                <strong>Lucas Silva</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar Seu Perfil
                </a>
            </footer>
        </aside>
    );
}