import { NFTStorage, File } from 'nft.storage'

const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDNmNDdkN0ZBNzkzRDBlMzI5ZWFkMUJkNjJmOTY4MDkwNTQxNUMzRDYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NTI3MjgzMTYzNiwibmFtZSI6IjRyb250c2VhIn0.mhrf7qoKsQoQozV8FaooTTtubzizxkI8vt6cf9CJqjU'
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

const imageFile = new File([ someBinaryImageData ], 'nft.png', { type: 'image/png' })
const metadata = await client.store({
  name: 'My sweet NFT',
  description: 'Just try to funge it. You can\'t do it.',
  image: imageFile
})