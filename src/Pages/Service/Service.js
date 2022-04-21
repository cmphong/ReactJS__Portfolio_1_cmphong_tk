import React, { useEffect } from 'react'
import './_service.scss'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import {goToContact} from '../../features/goToContact'

import imgOrderService from '../../images/imgOrderService.jpg'

const icons = {
  search: <i class="fas fa-search-plus"></i>,
  desktop: <i class="fas fa-desktop"></i>,
  rocket: <i class="fas fa-rocket"></i>,
  layer: <i class="fas fa-layer-group"></i>,
  fingerprint: <i class="fas fa-fingerprint"></i>,
  mobile: <i class="fas fa-mobile-alt"></i>,
}
export default function Service(){

  const cards = [
    {icon: icons.search, title: 'ux research', desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters' },
    {icon: icons.desktop, title: 'web design', desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters' },
    {icon: icons.rocket, title: 'seo optimized', desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters' },
    {icon: icons.layer, title: 'development', desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters' },
    {icon: icons.fingerprint, title: 'security', desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters' },
    {icon: icons.mobile, title: 'app design', desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters' },
  ]

  function lazyLoading(){
    const options = {
      rootMargin: '0px 0px -100px 0px',
      threshold: 0
    }
    const sliders = document.querySelectorAll('.slider')
    
    const observer = new IntersectionObserver((entries, appearOnscroll) => {
  
      entries.forEach(obj => {
        if(!obj.isIntersecting){
          return
        }else{
          obj.target.classList.add('appear')

          // clean
          appearOnscroll.unobserve(obj.target)
        }
      })
    }, options)
  
    sliders.forEach(slider => observer.observe(slider))

  }

  useEffect(() => {
    lazyLoading()
  })

  return (
    <div id='Service'>
      <div className="container">

        <div className="space"></div>
        
        <div className="content">
          <div className="row servcie-card">
            {
              cards.map((card, idx) => (
                <div key={`key-${idx}`}  className='slider'>
                  <div className="card">
                    {card.icon}
                    <p>{card.title}</p>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="space"></div>
          <div className="order">
            <div className="row col2">
              <div className="col-left slider">
                <img src={imgOrderService} alt="contact-me"/>
              </div>
              <div className="col-right slider">
                <div className="block">
                  <p>Need my help in your project?</p>
                  <Link className='button-icon' to={location => goToContact(location)}>contact me <i class="fas fa-paper-plane"></i></Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Link CV: https://doc-10-8c-docs.googleusercontent.com/docs/securesc/2irqkb9p7l57nefuujp7c350q5ga0uga/08sj6qe9imof8oepobmqupuogj9asn5g/1649735025000/12927047047980029988/12927047047980029988/1-HBxxo-Fk791dsJpcSrO39NHCebBzykq?e=download&ax=ACxEAsakmYfE9MN37ROvknJS6f72hGsc5OyR3kQ5he7mH7vsJ6tnUka2qkIQHJ1GHWJtqbYRk5EjSCSIIN-TMkRgo8qFA-uUGPlx5TbfyFAnOTmLqK7mKd6vZgsIWtctUGJ0PPRueh4gf0EBEPZYf3OLumkh4V2vyq8F6pBkEw8_Nx2g6pS1rVuwwOgeIUG1i305ZBsEO3T6gdsai3D5_wBVRnUeD3bRf9w-UhJu27l_A_u-VwNM0ARSF1tmYoKmFINcj3JIxUOF9eVeBqBogbvfxkWm4kbxATQO9iMlrcCUJ1XavmeCDcP8xBCADHoXpJHvRZIXPRMhlCBYRVONZ1dXOZgyW2k-eSIxNSOakS3lUZ0hIEPcrMTps-Rh_hlliL9RkdRdfF4cqJqYGJOXXO-PPb8Yz_-5KvZ4hSOyu_5Cqye_ZaPvUqdUid6LrWUk_bVMNRQeMbyMNeJLbdu8MRnDjiOv2zDkBhaihdMqGI7eMfUQP7FhV3fWZodVtv0wi-Zld25sitMBa-BzpBywH5UmYA_OmS_37AQRJQRgjGyVXKm-TYEyWNAdS0cCH_wVIg7o91KRjANw0IcXyhJfWYD-QDQ-dcYUZCN4DwE3buHJY-XWKvzQ__6jW-1pr-k7LN78ykXGO9gP1aMyxzdj3wdPBKh3IauFNl5seFgo6oKyh-KKiCVheVfZxyLY1mSMTOLyBSngKsYmYL_v37BnB2m0I5OUBPg7KN13h0gq8r3WL4LRThp9coiOqQzvXSKWGtaSGYz2qlSWOAc-g63FWMgJf_c&authuser=0

// Khai báo thuộc tính cho Component
Service.propTypes = {
  // todos: PropTypes.array,
  // onTodoClick: PropTypes.function,
};

// Gán giá trị mặc định cho props, khi
// props không có giá trị
Service.defaultProps = {
  // todos: [],
  // onTodoClick: null,
};
