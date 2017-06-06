import React, { Component } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import ModalHelper from 'helpers/modal'

import PageTitle from 'components/PageTitle'
import Languages from './components/Languages'
import Programming from './components/Programming'
import SoftSkills from './components/SoftSkills'

import styles from './About.scss'

const A_SECOND = 1000
const DURATION = 20 * A_SECOND

const Surprise = () => (
  <div>
    <br />
    Oh! You&#39;re here again! Thank you! If you wanna talk to me please <a href="mailto:colus001@me.com">send me an email</a>. I will buy you a coffee!
  </div>
)

class About extends Component {
  componentDidMount() {
    if (!localStorage) return

    const lastDisplayedAt = localStorage.getItem('lastDisplayedAt')
    const hasDisplayedADayAgo = moment(lastDisplayedAt).add(1, 'days').isSameOrBefore(moment())
    const isHiding = lastDisplayedAt && !hasDisplayedADayAgo
    if (isHiding) return

    this.timeout = setTimeout(() => {
      ModalHelper.toggleModal({
        title: 'Surprise!',
        content: (
          <div>
            <p>
              Hey! You have been looking thorugh my profile, right? If you interested in me, you can see <Link to="/career" onClick={this.onClick}>my work experience</Link> or you may want to <Link to="/hire" onClick={this.onClick}>hire me</Link> directly!
            </p>
            {hasDisplayedADayAgo && <Surprise />}
          </div>
        ),
      })

      localStorage.setItem('lastDisplayedAt', new Date())
    }, DURATION)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  onClick = () => {
    ModalHelper.hideModal()
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className={styles.container}>
        <PageTitle
          title="Who am I?"
          subTitle="My passion and me"
        />

        <Languages />
        <Programming />
        <SoftSkills />
      </div>
    )
  }
}

export default About
