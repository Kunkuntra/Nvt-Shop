/**
 * 1. Render product
 */
$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

const listContainer = $('.container-category-list');
const homeProduct = $('.home-product')
const hoverNotify = $('.header__navbar--hover')
const notifyList = $('.header__notify-list')
const hoverCart = $('.header__cart-wrap')
const cartList = $('.header__cart-list')
const cartListItem = $('.header__cart-list-item')


const app = {
    notifies: [
        {
            img:'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lj42vt2r8p1u9b_tn',
            name:'Vợt cầu lông KUMPOO',
            description:'1 Vợt cầu lông KUMPOO K520 PRO chính hãng, căng sẵn 11kg tặng kèm bao đựng và quấn cán',
            view:``
        },
        {
            img:'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-liiptt2h5l8yeb_tn',
            name:'Cuộn cán vợt',
            description:'Cuốn cán vợt tennis, cầu lông V.S/ YN cao cấp, chính hãng (1 cái)',
            view:` header__notify-link--no-viewed`
        },
        {
            img:'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-ljefgxs3ifv653_tn',
            name:'Cầu lông bằng nhựa',
            description:'Set 3-6-12 quả cầu lông bằng nhựa nylon siêu bền luyện tập trong và ngoài nhà ( nhiều màu)',
            view:` header__notify-link--no-viewed`
        }
    ],
    carts:[
        {
            img:'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lj42vt2r8p1u9b_tn',
            name:'Vợt cầu lông KUMPOO',
            description:'1 Vợt cầu lông KUMPOO K520 PRO chính hãng, căng sẵn 11kg tặng kèm bao đựng và quấn cán',
            price: '489.800đ'
        },
        {
            img:'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-liiptt2h5l8yeb_tn',
            name:'Cuộn cán vợt',
            description:'Cuốn cán vợt tennis, cầu lông V.S/ YN cao cấp, chính hãng (1 cái)',
            price: '6.980đ'
        },
        {
            img:'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-ljefgxs3ifv653_tn',
            name:'Cầu lông bằng nhựa',
            description:'Set 3-6-12 quả cầu lông bằng nhựa nylon siêu bền luyện tập trong và ngoài nhà ( nhiều màu)',
            price: '25.000đ'
        }
    ],
    containers : [
        {
            name: 'Tất cả',
            active: ` active`
        },
        {
            name: 'Vợt',
            active: ``
        },
        {
            name: 'Phụ kiện',
            active: ``
        }
    ],
    products : [
        {
            img: 'https://down-vn.img.susercontent.com/file/ab0e1c215e985ffd9268b4aa26f6dfa3_tn',
            name: 'LOCO FISH Bộ 2 cây vợt cầu lông kèm túi cho người mới bắt đầu',
            oldPrice: '1.200.000đ',
            currentPrice:'999.000đ',
            sold: '88',
            brand: 'ABC',
            origin: 'Nhật Bản',
            percent:'17%'
        },
        {
            img: 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lj42vt2r8p1u9b_tn',
            name: '1 Vợt cầu lông KUMPOO K520 PRO chính hãng, căng sẵn 11kg tặng kèm bao đựng và quấn cán',
            oldPrice: '570.000đ',
            currentPrice:'489.800đ',
            sold: '10k',
            brand: 'ABC',
            origin: 'Nhật Bản',
            percent:'14%'
        },
        {
            img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmtuk0ma9b6nf7_tn',
            name: '1 Vợt Cầu Lông Đơn 100% Khung Crom Siêu Bền Đẹp cao cấp (1 chiếc)',
            oldPrice: '159.000đ',
            currentPrice:'155.820đ',
            sold: '13k',
            brand: 'ABC',
            origin: 'Nhật Bản',
            percent:'2%'
        },
        {
            img: 'https://down-vn.img.susercontent.com/file/vn-11134201-23020-dvv3ubhalxnvba_tn',
            name: '1 Vợt cầu lông Li-Ninggg / Victor khung crom siêu bền đẹp (tặng 1 bao đựng vợt )',
            oldPrice: '165.000đ',
            currentPrice:'150.000đ',
            sold: '10k',
            brand: 'ABC',
            origin: 'Nhật Bản',
            percent:'9%'
        },
        {
            img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmt3se6bk6ovf1_tn',
            name: '1 Vợt Cầu Lông 100% Khung Cacbon Siêu bền 3 Quà Tặng ( 1 Cước + 1 Cuốn Cán + 1 Bao vợt)',
            oldPrice: '275.000đ',
            currentPrice:'200.000đ',
            sold: '8k',
            brand: 'ABC',
            origin: 'Nhật Bản',
            percent:'28%'
        },
        {
            img: 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-liiptt2h5l8yeb_tn',
            name: 'Cuốn cán vợt tennis, cầu lông V.S/ YN cao cấp, chính hãng (1 cái)',
            oldPrice: '12.000đ',
            currentPrice:'6.980đ',
            sold: '153k',
            brand: 'ABC',
            origin: 'Nhật Bản',
            percent:'42%'
        },
        {
            img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llsp1hsqsnvjee_tn',
            name: 'Cuốn cán vợt siêu đẹp (1 cái)',
            oldPrice: '8.000đ',
            currentPrice:'6.000đ',
            sold: '9k',
            brand: 'ABC',
            origin: 'Nhật Bản',
            percent:'25%'
        },
        {
            img: 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-ljefgxs3ifv653_tn',
            name: 'Set 3-6-12 quả cầu lông bằng nhựa nylon siêu bền luyện tập trong và ngoài nhà ( nhiều màu)',
            oldPrice: '30.000đ',
            currentPrice:'25.000đ',
            sold: '665',
            brand: 'ABC',
            origin: 'Nhật Bản',
            percent:'17%'
        },
        {
            img: 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-ljedig6b12365e_tn',
            name: '1 Hộp cầu lông VINA STAR -12 quả - chính hãng, chuẩn thi đấu, giá rẻ',
            oldPrice: '225.000đ',
            currentPrice:'202.500đ',
            sold: '2k',
            brand: 'ABC',
            origin: 'Nhật Bản',
            percent:'10%'
        },
        {
            img: 'https://down-vn.img.susercontent.com/file/c6b07b812e634cf05107c4b79711321b_tn',
            name: 'LƯỚI CẦU LÔNG 4 VIỀN Minh Tú chuẩn thi đấu, chính hãng giá rẻ',
            oldPrice: '69.000đ',
            currentPrice:'49.000đ',
            sold: '8k',
            brand: 'ABC',
            origin: 'Nhật Bản',
            percent:'27%'
        },
    ],

    // modal: function({
    //     nameFrom ='',
    //     nameBtnChangeFrom = '',
    //     nameBtn = '',
    //     nameLink1 = '',
    //     nameLink2 = ''
    // }){
    //     const main = document.getElementById('modal');
    //     main.classList.remove('hidden')
    //     if(main){
    //         const modal = document.createElement('div');
    
    //         modal.onclick = function(e){
    //             if(e.target.closest('.auth-from__controls-back'||'.btn--Primary')){
    //                 main.removeChild(modal)
    //             }
    //         }
    //         modal.classList.add('modal');
    //         modal.innerHTML = `
    //             <div class="modal__overlay"></div>
    //             <div class="modal__body">
    //                 <div class="auth-from">
    //                     <div class="auth-from__container">
    //                         <div class="auth-from__header">
    //                             <h3 class="auth-from__heading">${nameFrom}</h3>
    //                             <span class="auth-from__switch-btn">${nameBtnChangeFrom}</span>
    //                         </div>
    //                         <div class="auth-from__from">
    //                             <div class="auth-from__group">
    //                                 <input type="text" class="auth-from__input" placeholder="Nhâp email">
    //                                 <span class="form-message"></span>
    //                             </div>
    //                             <div class="auth-from__group">
    //                                 <input type="password" class="auth-from__input" placeholder="Nhâp mật khẩu">
    //                                 <span class="form-message"></span>
    //                             </div>
    //                             ${nameFrom === 'Đăng ký' ? `<div class="auth-from__group">
    //                                 <input type="password" class="auth-from__input" placeholder="Nhập lại mật khẩu">
    //                                 <span class="form-message"></span>
    //                             </div>` : ''}
    //                         </div>
    //                         <div class="auth-from__aside">
    //                             ${nameFrom === 'Đăng ký' ? `<p class="auth-from__policy-text">
    //                                 Bằng việc đăng kí , bạn đã đồng ý với NVT24-shop về
    //                                 <a href="" class="auth-from__text-link">Điều khoản</a>&
    //                                 <a href="" class="auth-from__text-link">Chính sách bảo mật</a>
    //                             </p>` : ''}
    //                             ${nameFrom === 'Đăng nhập' ? `<div class="auth-from__help">
    //                                 <a href="" class="auth-from__help-link">Quên mật khẩu</a>
    //                                 <a href="" class="auth-from__help-link">Cần trợ giúp?</a>
    //                             </div>` : ''}
    //                         </div>
    //                         <div class="auth-from__controls">
    //                             <button class="btn auth-from__controls-back">TRỞ LẠI</button>
    //                             <button class="btn btn--Primary">${nameBtn}</button>
    //                         </div>
    //                     </div>
    //                     <div class="auth-from__socials">
    //                         <a href="" class="btn btn--with-icon">
    //                             <span class="btn--with-icon-text btn--with-icon-text--fb">
    //                                 <i class="fa-brands fa-square-facebook"></i>
    //                                 ${nameLink1}
    //                             </span>
    //                         </a>
    //                         <a href="" class="btn btn--with-icon">
    //                             <span class="btn--with-icon-text btn--with-icon-text--gg">
    //                                 <i class="fa-brands fa-google"></i>
    //                                 ${nameLink2}
    //                             </span>
    //                         </a>
    //                     </div>
    //                 </div>
    //             </div>
    //         `;
    //         main.appendChild(modal);
    //     }
    // }, 

    //Render main app
    render:function(){
        const htmlsContainer = this.containers.map((container,index)=>{
            return`
            <li class="container-category-item${container.active}">
                <a href="" class="container-category-item__link">${container.name}</a>
            </li>
            `
        })
        listContainer.innerHTML = htmlsContainer.join('')

        
        const modal = document.createElement('div');
        modal.classList.add('grid__row')
        homeProduct.appendChild(modal)
       
        const htmlsProduct = this.products.map((product,index)=>{
            return`
            <div class="grid__colum-10-2">
                <!-- product item  -->
                <a class="home-product-item" href="#">
                    <div class="home-product-item__img" style="background-image: url(${product.img});"></div>
                    <h4 class="home-product-item__name">${product.name}</h4>
                    <div class="home-product-item__price">
                        <span class="home-product-item__price-old">${product.oldPrice}</span>
                        <span class="home-product-item__price-current">${product.currentPrice}</span>
                    </div>
                    <div class="home-product-item__action">
                        <!-- nếu ấn like thì thêm active  -->
                        <span class="home-product-item__like">
                            <i class="heart-regular fa-regular fa-heart"></i>
                            <i class="heart-solid fa-solid fa-heart"></i>
                        </span>
                        <span class="home-product-item__rating">
                            <i class="fa-solid fa-star active"></i>
                            <i class="fa-solid fa-star active"></i>
                            <i class="fa-solid fa-star active"></i>
                            <i class="fa-solid fa-star active"></i>
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span class="home-product-item__sold">${product.sold} đã bán</span>
                    </div>
                    <div class="home-product-item__origin">
                        <span class="home-product-item__brand">${product.brand}</span>
                        <span class="home-product-item__origin-name">${product.origin}</span>
                    </div>
                    <div class="home-product-item__favourite">
                        <i class="fa-solid fa-check"></i>
                        <span>
                            Yêu thích
                        </span>
                    </div>
                    <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent">${product.percent}</span>
                        <span class="home-product-item__sale-off-label">GIẢM</span>
                    </div>
                </a>
            </div>
            `
        })
        modal.innerHTML = htmlsProduct.join('')
    },


    handleEvents: function() {

        const _this = this
        const isLike = false
        //hover into notify
        hoverNotify.onmouseover = function(){
            const htmls = _this.notifies.map((notify,index)=>{
                return`
                <li class="header__notify-item${notify.view}">
                    <a href="" class="header__notify-link">
                        <img src="${notify.img}" alt="" class="header__notify-img">
                        <div class="header__notify-info">
                            <span class="header__notify-name">${notify.name}</span>
                            <span class="header__notify-description">${notify.description}</span>
                        </div>
                    </a>
                </li>
                `
            })
            notifyList.innerHTML = htmls.join('')
        }

        //hover into cart
        hoverCart.onmouseover = function(){
            if(_this.carts.length === 0){
                cartList.classList.remove('header__cart-list--have-cart')
                cartList.classList.add('header__cart-list--no-cart')
            }
            else{
                cartList.classList.remove('header__cart-list--no-cart')
                cartList.classList.add('header__cart-list--have-cart')
                const htmls = _this.carts.map((cart,index)=>{
                    return`
                    <li class="header__cart-item">
                        <img src="${cart.img}" alt="" class="header__cart-item-img">
                        <div class="header__cart-item-content">
                            <h3 class="header__cart-item-content-name">${cart.name}</h3>
                            <p class="header__cart-item-content-description">${cart.description}</p>
                        </div>
                        <div class="header__cart-item-price">${cart.price}</div>
                    </li>
                    `
                })
                cartListItem.innerHTML = htmls.join('')
            }
        }
        // press heart
        // parentFavourite.onclick = function(){
        //     const favourite1 = document.querySelectorAll('.heart-regular')
        //     const parentFavourite = favourite1.parentElement
        //     const favourite2 = document.querySelectorAll('.heart-solid')
        //     console.log(favourite1, parentFavourite, favourite2)
        //     if (favourite1){
        //         favourite1.parentElement.classList.add('active')
        //     }else{
        //         favourite2.parentElement.classList.remove('active') 
        //     }
        // }
    },

    start: function() {
        this.render();
        
        this.handleEvents();

    }
}
app.start()