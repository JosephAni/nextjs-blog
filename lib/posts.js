import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
<<<<<<< HEAD
<<<<<<< HEAD
import { remark } from 'remark'
import html from 'remark-html'
=======
>>>>>>> 88556fb (packages)
=======
import { remark } from 'remark'
import html from 'remark-html'
>>>>>>> 9524330 (files)

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
<<<<<<< HEAD
    };
  });
}

export async function getPostData(id) {
=======
    }
  })
}

<<<<<<< HEAD
export function getPostData(id) {
>>>>>>> 88556fb (packages)
=======
export async function getPostData(id) {
>>>>>>> 9524330 (files)
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9524330 (files)
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
<<<<<<< HEAD
  return {
    id,
    contentHtml,
=======
  // Combine the data with the id
  return {
    id,
>>>>>>> 88556fb (packages)
=======
  return {
    id,
    contentHtml,
>>>>>>> 9524330 (files)
    ...matterResult.data,
  }
}
