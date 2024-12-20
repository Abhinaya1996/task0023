import blogstyles from '../styles/Blog.module.css';

export default function Blog(){
    return <>
    <div className={blogstyles.blogsection}>
        <p>OUR BLOG</p>
        <h2>Latest news</h2>
        <div className={blogstyles.blogs}>
            <div className={blogstyles.blogsColumn}>
                <div className={blogstyles.imageWrapper}>
                    <img src="/assets/blog1-450x580.jpg.png" alt="Blog post image" className={blogstyles.long} />
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                </div>
                <div className={blogstyles.imageWrapper}>
                    <img src="/assets/blog1-450x580.jpg.png" alt="Blog post image 2" className={blogstyles.short} />
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                </div>
            </div>

            <div className={blogstyles.blogsColumn}>
                <div className={blogstyles.imageWrapper}>
                    <img src="/assets/blog1-450x580.jpg.png" alt="Blog post image 3" className={blogstyles.short} />
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                </div>
                <div className={blogstyles.imageWrapper}>
                    <img src="/assets/blog2-450x580.jpg.png" alt="Blog post image 4" className={blogstyles.long} />
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                </div>
            </div>


            <div className={blogstyles.blogsColumn}>
                <div className={blogstyles.imageWrapper}>
                    <img src="/assets/blog1-450x580.jpg.png" alt="Blog post image 5" className={blogstyles.long}/>
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                </div>
                <div className={blogstyles.imageWrapper}>
                    <img src="/assets/blog2-450x580.jpg.png" alt="Blog post image 6" className={blogstyles.short} />
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                </div>
            </div>

            <div className={blogstyles.blogsColumn}>
                <div className={blogstyles.imageWrapper}>
                    <img src="/assets/blog1-450x580.jpg.png" alt="Blog post image 7" className={blogstyles.short}/>
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                </div>
                <div className={blogstyles.imageWrapper}>
                    <img src="/assets/blog2-450x580.jpg.png" alt="Blog post image 8" className={blogstyles.long} />
                    <div className={blogstyles.ribbon}><p>20 April</p></div>
                    <div className={blogstyles.imageTitle}>Hac hendrerit mus nons semper <br/> suspendisse</div>
                </div>
            </div>
        </div>
    </div>

    </>
}