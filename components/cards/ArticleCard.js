import Image from 'next/image'
import Link from 'next/link'
import { baseUrl } from "../../utils/handelApi"

function ArticleCard({articleData}) {
    const {title,desc,url,image} = articleData;
    return (
        <div className="card" dir="rtl">
            <div className="card-head">
                <Image
                    layout='responsive'
                    width={600}
                    height={550}
                    className="card-img-top"
                    src={`${baseUrl}/images/${image}`}
                    blurDataURL={`${baseUrl}/images/${image}`}
                    placeholder="blur"
                    alt={title}
                />
            </div>
            <div className="card-body">
                <Link href={`/blog/${url}`}>
                    <h5 className="card-title fs-4">
                        {title}
                    </h5>
                </Link>
                <p className="card-text">{desc.slice(0,160)}...</p>
                <Link href={`/blog/${url}`} className="btn btn-outline-secondary">اقرا المقال الان</Link>
            </div>
        </div>
    )
}

export default ArticleCard