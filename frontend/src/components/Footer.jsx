import { Link } from 'react-router-dom';
import FOOTER_LINKS from '../assets/footer_links';
import FOOTER_CONTACT_INFO from '../assets/footer_contact'
import SOCIALS from '../assets/data'
const Footer = () => {


  const FooterColumn = ({ title, children }) => {
    // console.log(title);
    return (
      <div>
        <h4>{title}</h4>
        {children}
      </div>
    )
  }
  return <>
    <footer>
      <div>
        <div>
          <Link to='/' className='mb-10 bold-20'>Shoppee</Link>
          <div className='flex flex-wrap gap-8 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((col) => {
              // console.log(col);
              <FooterColumn title={col.title} key={col.title}>
              {/* console.log(col); */}

                <ul className='flex flex-col gap-4 regular-14 text-gry-20'>
                  {console.log(col)}
                  {col.links.map((link,index) => (
                
                    // <Link to={'/'} key={link}><img src={link} alt='socialIcon' height={22} width={22}></img></Link>
                    <li key={index}>{link}</li>

                  ))}
                </ul>
              </FooterColumn>
            })}
            <div>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => {
                  <div key={link.label}>
                    <Link to={'/'} >
                    <p>{link.label}:</p><p>{link.value}</p>
                  </Link>

                  </div>
                })}
              </FooterColumn>
            </div>
            <div>
              <FooterColumn title={SOCIALS.title}>
                <ul>
                  {SOCIALS.links.map((link,index) => {
                    <li key={index}>
                                          <Link to={'/'} key={link}><img src={link} alt='socialIcon'></img></Link>

                    </li>
                  })}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default Footer