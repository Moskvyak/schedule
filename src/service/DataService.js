import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import Axios from 'axios';

const graphClient = new ApolloClient({
  uri: 'http://localhost:3500/graphql'
});

const axiosClient = Axios.create({
  baseURL: 'http://localhost:3400'
});

const RESOURCE_JOB_ALLOCATIONS_ACTIVITY_ALLOCATIONS = gql`
  {
    resources {
      id
      name
    }
    jobAllocations {
      id
      task: job {
        name
        start
        end
        id
        contact {
          name
        }
      }
      resource {
        id
        name
      }
    }
    activityAllocations {
      id
      task: activity {
        id
        name
        start
        end
      }
      resource {
        id
        name
      }
    }
  }
`;

const JOBS_WITH_SEARCH_TERM = gql`
  query($searchTerm: String) {
    jobs(name: $searchTerm) {
      id
      name
      start
      end
      contact {
        id
        name
      }
    }
  }
`;

export const DataService = {
  getJobsWithSearchTerm: searchTerm => {
    return graphClient
      .query({
        query: JOBS_WITH_SEARCH_TERM,
        variables: {
          searchTerm: searchTerm
        }
      })
      .then(result => result.data)
      .then(data => data.jobs);
  },

  getResourceAllocations: () => {
    return graphClient
      .query({
        query: RESOURCE_JOB_ALLOCATIONS_ACTIVITY_ALLOCATIONS
      })
      .then(result => result.data);
  }

  //
  //  SAMPLE Normal call
  //
  // getJobs: () => {
  //   return axiosClient.get('/jobs')
  //     .then(result => result.data.map(x => Object.assign({}, x, { id: x.id + '' })))
  // },
};
