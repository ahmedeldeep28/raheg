import Image from 'next/image'
import Link from 'next/link'
import { baseUrl } from "../../utils/handelApi"
function ProductCard({ productData }) {
    const { name, price, newPrice, url, desc, image } = productData;
    return (
        <div className="card product text-center pb-2">
            <div className="card-head">
                {newPrice
                    ?
                    <div className="discont bg-danger text-light">
                        {price - newPrice / price * 100}%
                    </div>
                    : null
                }
                <Image
                    layout='fill'
                    objectFit='cover'
                    src={`${baseUrl}/images/${image[0]}`}
                    blurDataURL={`${baseUrl}/images/${image[0]}`}
                    placeholder="blur"
                    alt="..."
                />
            </div>
            <div className="card-body">
                <h4 className="card-title mb-3">
                    <Link href={`/shop/${url}`} >
                        {name}
                    </Link>
                </h4>
                <p className="card-text">{desc.slice(0, 75)}...</p>
                {newPrice
                    ? <div className="price text-success pb-2 h5">
                        <span >{newPrice}</span>
                        -
                        <span className='text-danger text-decoration-line-through fw-ligh'>{price}</span>جنية
                    </div>
                    : <p className="price text-success pb-2 h5">{price} جنية </p>
                }

                <Link href={`/shop/${url}`} className="btn btn-primary mt-2">
                    اطلب المنتج الان
                </Link>
            </div>
        </div>
    )
}

export default ProductCard