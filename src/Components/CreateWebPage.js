
export default function createWebPage (){
    const webContentContainer = document.createElement('div')
    webContentContainer.className = 'web-content-container'
    webContentContainer.id = 'web-content-container'

    webContentContainer.innerHTML += `

        <div class="header">
            <div class="user-logIn">
                <i class="fa-regular fa-user"></i>
                <p>Log In</p>
            </div>
            <nav class="navbar">
                <ul>
                    <li><a href="" class="selected">Popular</a></li>
                    <li><a href="">Recent</a></li>
                    <li><a href="" >Favorite</a></li>
                </ul>
            </nav>
        </div>

        <div class="content-container">

        <button class="button-left">
            <i class="fa-solid fa-chevron-left"></i>
        </button>

            <div class="movies-container" data-slides='0'>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie One</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Two</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Three</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Four</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Five</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Six</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Seven</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Eight</p>
                </div>
                <div class="content-control">
                    <div class="placeholder-movie">
                        <div class="placeholder-img"></div>
                    </div>
                    <p>Movie Nine</p>
                </div>
            </div>

            <button class="button-right">
                <i class="fa-solid fa-chevron-right"></i>
            </button>

            <div class="content-nav">
                <button class="content-indicator-first current-slide"></button>
                <button class="content-indicator-second"></button>
                <button class="content-indicator-third"></button>
            </div>

        </div>
    `

    return webContentContainer
}
