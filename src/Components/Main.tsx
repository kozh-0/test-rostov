

export default function Main() {
    return (
        <div className="top container">
            <div className="top_title">
                <div>
                    <h1>ПУТЕШЕСТВИЕ</h1>
                    <h3>на красную планету</h3>
                </div>
                <button>Начать путешествие</button>
            </div>



            <div className="top_stats">
                <div className="top_stats_item">
                    мы
                    <span>1</span>
                    на рынке
                </div>
                <div className="top_stats_item">
                    гарантируем
                    <span>50%</span>
                    безопасности
                </div>
                <div className="top_stats_item">
                    календарик за
                    <span>2001<span style={{fontSize: '30px'}}>г.</span></span>
                    в подарок
                </div>
                <div className="top_stats_item">
                    путешествие
                    <span>597</span>
                    дней
                </div>
            </div>
        </div>
    )
}
