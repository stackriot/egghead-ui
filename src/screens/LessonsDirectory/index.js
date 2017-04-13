import React from 'react'
import {Text} from 'react-localize'
import Heading from 'components/Heading'
import LessonOverviewsByGroup from 'components/LessonOverviewsByGroup'

export default () => (
  <div>
    <Heading level='5'>
      <Text message='lessonOverviewsByGroup.allTitle' />
    </Heading>
    <LessonOverviewsByGroup />
  </div>
)
