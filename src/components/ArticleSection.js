import ArticlePostCard from "./ArticlePostCard";

export default function ArticleSection(){

    let arr = [ "After a Few Dates, They Traveled to the Other Side of the World" , "Jessamyn Stanley's 5-Minute Yoga for Beginners", "How an MS Diagnosis Changed My Relationship With Food", "Where to Score the Best Travel Deals on Cyber Monday", "5 Kinds of Food-Shamers You Will Encounter (and How to Deal)", "12 Best Books to Read at the Beach This Summer"];
    return(
        <section className="container trend-section">
            {
                arr.map((textArticle, index) => {
                    return <ArticlePostCard key={textArticle} textArticle={textArticle}/>
                })

            }

        </section>
    )
}