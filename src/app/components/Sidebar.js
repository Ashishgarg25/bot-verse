import RecentPost from '../components/RecentPost'
import ExploreTopics from '../components/ExploreTopics'
import Newsletter from '../components/sections/NewsletterSection'

export default function Sidebar() {
    return (
        <div className="w-full max-w-[370px]">
            <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <RecentPost />
                {/* <ExploreTopics /> */}
                <Newsletter />
            </main>
        </div>
    )
}
