import React, {PropTypes} from 'react'
import { keys } from 'lodash'
import { CourseMeta, CourseHeader } from './CourseCard'
import { LessonMeta, LessonHeader } from './LessonCard'
import { PlaylistMeta, PlaylistHeader } from './PlaylistCard'
import Playlist from '../Playlist/'
import { buildPlaylistMeta } from '../../utils/Playlist'
import { secondsToString } from '../../utils/Time'

const commonCardClasses = 'relative card'
const commonInnerClasses = 'flex flex-column items-center bg-white navy relative z-1 card-course-inner br2'
const enhancedInnerClasses = `${commonInnerClasses} overflow-hidden pa4 pointer`
const footerClasses = 'flex justify-between self-stretch items-center' 
const pillClasses = 'f6 lh-title ttu fw6 ph3 pv1 br-pill tracked'
const orangePillClasses = `${pillClasses} orange bg-tag-orange`
const bluePillClasses = `${pillClasses} blue bg-tag-blue`
const greenPillClasses = `${pillClasses} dark-green bg-tag-turquoise tracked`

const buildCardMeta = (type, response) => {
  if (type.toLowerCase() === 'course') {
    return {lessonCount: response.lesson_count}
  }

  if (type.toLowerCase() === 'lesson') {
    return {
      langImg: response.tech_logo_http_url,
      videoLength: secondsToString(response.duration)
      
    }
  }

  if (type.toLowerCase() === 'playlist') {
    return {
      timeRemaining: 'temp',
      lessonsLeft: response.lesson_count - response.completed_lesson_count,
      currentLesson: response.progress.current_lesson,
      playlist: buildPlaylistMeta(response.lessons, response.progress)
    }
  }
  
  return { meta: response }
}

const cardTypes = {
  'course': {
    'cardClasses': `${commonCardClasses} card-stacked-shadow card-course`,
    'innerClasses': `${enhancedInnerClasses}`,
    'pillClasses': `${orangePillClasses}`,
    'metaComponent': (response) => <CourseMeta meta={buildCardMeta('course', response)} />,
    'headerComponent': (response) => <CourseHeader response={response} />
  },
  'lesson': {
    'cardClasses': `${commonCardClasses} card-lesson`,
    'innerClasses': `${enhancedInnerClasses}`,
    'pillClasses': `${bluePillClasses}`,
    'metaComponent': (response) => <LessonMeta meta={buildCardMeta('lesson', response)} />,
    'headerComponent': (response) => <LessonHeader response={response} />


  },
  'playlist': {
    'cardClasses': `${commonCardClasses} card-stacked-shadow sans-serif card-playlist`,
    'innerClasses': `${commonInnerClasses}`,
    'pillClasses': `${greenPillClasses}`,
    'footerClasses': 'pb4 ph4',
    'metaComponent': (response) => <PlaylistMeta meta={buildCardMeta('playlist', response)} />,
    'headerComponent': (response) => <PlaylistHeader response={response} />
  }
}

const titleHeadingClasses = 'f3 tc mt4 mb2 avenir fw5'
const instructorNameClasses = 'f6 dark-gray o-50 mb4 tc'

const MaterialType = ({type}) => {
  return (
    <div className={cardTypes[type]['pillClasses']}>{type}</div> 
  )
}
MaterialType.propTypes = {
  type: PropTypes.string.isRequired
}

const CardHeader = ({response, type}) => {
  const headerComponent = cardTypes[type].headerComponent ? cardTypes[type].headerComponent(response) : null
  return (
    <div className='w-100'>
      {headerComponent}
    </div>
  )  
}
CardHeader.propTypes = {
  response: PropTypes.object,
  type: PropTypes.string.isRequired
}

const CardFooter = ({response, type}) => {
  const metaComponent = cardTypes[type].metaComponent ? cardTypes[type].metaComponent(response) : null
  return (
    <div className={`${footerClasses} ${cardTypes[type]['footerClasses']}`}>
      {metaComponent}
      <MaterialType type={type} />
    </div>
  ) 
}
CardFooter.propTypes = {
  response: PropTypes.object,
  type: PropTypes.string.isRequired
}

const CardBody = ({title, instructor}) => {
  return (
    <div>
      <h3 className={titleHeadingClasses}>{title}</h3>
      <div className={instructorNameClasses}>{instructor}</div>
    </div>
  )
}
CardBody.propTypes = {
  title: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired
}

const Card = ({type, expanded, response}) => {
  const { title, instructor: { full_name }, lessons, progress } = response
  const cardPlaylist = buildPlaylistMeta(lessons, progress)
  const extendedClasses = 'relative w-100 z-1 overflow-hidden pv3 bg-tag-gray br2'
  return (
    <div className={`${cardTypes[type]['cardClasses']} ${expanded === 'horizontal' ? 'flex expanded-horizontal' : ''}`}> 
      <div className={`${cardTypes[type]['innerClasses']} ${!expanded ? 'br2' : ''} ${expanded === 'vertical' ? 'br2 br--top' : ''} ${expanded === 'horizontal' ? 'br2 br--left' : ''}`}>
        <CardHeader type={type} response={response} />
        <CardBody title={title} instructor={full_name} />
        <CardFooter type={type} response={response} />
      </div>
      <div className={`${expanded === 'vertical' ? `${extendedClasses} br--bottom` : ''} ${expanded === 'horizontal' ? `${extendedClasses} br--right` : ''}`}
        style={{height: 'auto', maxHeight: '475px'}}
      >
        { expanded === 'vertical'
          ? (
            <div style={{height: '290px'}}>
              <Playlist playlist={cardPlaylist} />
            </div>
          )
          : null
        }
        { expanded === 'horizontal'
          ? (
            <div style={{height: 'auto', maxHeight: '475px'}}>
              <Playlist playlist={cardPlaylist} />
            </div>
          )
          : null
        }
      </div>
    </div>
  )
}
Card.propTypes = {
  type: PropTypes.oneOf(keys(cardTypes)),
  response: PropTypes.object
}


export default Card
