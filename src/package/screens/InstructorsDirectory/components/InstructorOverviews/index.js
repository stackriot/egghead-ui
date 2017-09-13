import React, {Component, PropTypes} from 'react'
import Request from 'package/components/Request'
import Paragraph from 'package/components/Paragraph'
import createInstructorsUrlWithParams from './utils/createInstructorsUrlWithParams'
import PaginatedInstructorOverviews from './components/PaginatedInstructorOverviews'

class InstructorOverviews extends Component {
  
  static propTypes = {
    instructorsUrl: PropTypes.string.isRequired,
    pageSize: PropTypes.number,
  }

  static defaultProps = {
    pageSize: 10,
  }

  state = {
    currentPage: 1,
  }

  handleCurrentPage = (currentPage, request) => {
    this.setState({currentPage}, () => {request()})
  }

  render() {
    const {currentPage} = this.state
    const {instructorsUrl, pageSize} = this.props

    return (
      <Request
        auth={true}
        url={createInstructorsUrlWithParams({
          pageSize,
          page: currentPage,
          instructorsUrl: instructorsUrl,
        })}
        showLoadingBetweenRequests
      >
        {({request, running, data, response}) => (
          <PaginatedInstructorOverviews
            fallback={
              <Paragraph>
                No instructors to show
              </Paragraph>
            }
            pageSize={pageSize}
            currentPage={currentPage}
            total={response.headers['x-total-count']}
            instructors={data}
            requestNextPage={(nextPage) => {
              this.handleCurrentPage(nextPage, request)
            }}
          />
        )}
      </Request>
    )
  }
}

export default InstructorOverviews
