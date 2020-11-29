import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'static_content');

export const getPostData = async (id) => {
    // Generate full path for post md file based on id
    const fullPath = path.join(postsDirectory, `${id}.md`);
    // Extract contents using generated file path
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse the post metadata section
    const matterResult = matter(fileContents);

    // Convert markdown to HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    // Combine data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}