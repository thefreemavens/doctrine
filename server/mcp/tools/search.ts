import { z } from 'zod'

export default defineMcpTool({
  description: 'Search through my content',
  inputSchema: {
    query: z.string().describe('Search query')
  },
  async handler({ query }) {
    // Your search logic here
    const results = await searchContent(query)
    return jsonResult(results)
  }
})
