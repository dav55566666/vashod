{/* <Select defaultValue="Поиск" style={{ width: 120 }} onChange={handleChange}>
<Option value="Поиск"><span className='selectedchek'></span>Поиск</Option>
{posts.map((post) => (
<Option key={post.id} value={post.title}><span className='selectedchek'></span>{post.title}</Option>
))}
</Select> */}
import React, { useState, props } from 'react';

const apiEndpoint = 'https://project.prismic.io/api/v2';
const apiToken = 'TOKEN';

export default class Index extends React.Component {
  static async getInitialProps({ req, query }) {
    const data = await Prismic.getApi(apiEndpoint, { accessToken: apiToken })
      .then(api => {
        return api.query(''); // An empty query will return all the documents
      })
      .catch(err => console.log(err));

    return { cars: data.results };
  }

  render() {
  }
}