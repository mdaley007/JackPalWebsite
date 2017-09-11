// import modules
import React from 'react'

// import components
import Nav        from '../components/Nav'
import Screenplay from '../components/Screenplay'

// import styles
import style from '../styles/ScreenplayReader.css'

// import navList
import navList from './navList.json'

// view: Screenplay Reader
class ScreenplayReader extends React.Component {
    render() {
        var titlePage = getTitlePage()
        var scene1 = getScene()
        var noPage = getNoPage()

        var screenplay = []
        screenplay.push(titlePage)
        screenplay.push(scene1)

        return (
            <div className={style.window}>

                <Nav navList={navList}/>

                <div className={style.workspace}>

                    <Screenplay script={screenplay} />

                </div>

            </div>
        )
    }
}

export default ScreenplayReader

function getTitlePage() {
    return [
         {style: 'screenplayTitle', text: 'Rendezvous at Writers Store'},
         {style: 'center', text: 'By'},
         {style: 'center', text: 'John & Jane Smith'},
         {style: 'address', text: 'The Writers Store<br>2040 Westwood Blvd.<br>Los Angeles, California 90025<br>310-441-5151<br>Myemail@writerstore.come'},
         {style: 'newline', text:''}
    ]
}
function getScene() {
    return [
        {style: 'fadein', text: 'fade in:'},

        {style: 'description', text: '0XXXXXXXXX1XXXXXXXXX2XXXXXXXXX3XXXXXXXXX4XXXXXXXXX5XXXX'},
        {style: 'description', text: '0OOOOOOOOO1OOOOOOOOO2OOOOOOOOO3OOOOOOOOO4OOOOOOOOO5OO'},
        {style: 'description', text: '0WWWWWWWWW1WWWWWWWWW2WWWWWWWWW3WWWWWWWWW4WWWWWWWWW5'},

        {style: 'slugline', text: 'ext. writers store - day'},
        {style: 'description', text: 'In the heart of West Los Angeles, a boutique shop\'s large OPEN sign glows like a beacon.'},
        {style: 'transition', text: 'dissolve to:'},
        {style: 'slugline', text: '2. int. \&nbsp writers store - sales floor - day'},
        {style: 'description', text: 'Writers browse the many scripts in the screenplay section.<br><br><em>Anthony,</em> Canadian-Italian Story Specialist extraordinaire, 30s and not getting any younger, ambels over.'},
        {style: 'character', text: 'anthony'},
        {style: 'dialog', text: 'Hey, how\'s everybody doin\' here?'},
        {style: 'description', text: '<em>A Writing Enthusiast</em>, 45, reads the first page of \'The Aviator\' by John Logan.'},
        {style: 'character', text: 'enthusiast'},
        {style: 'dialog', text: 'Can John Logan write a killer first page or what?'},
        {style: 'character', text: 'anthony'},
        {style: 'dialog', text: 'You, sir, are a gentleman of refined taste. John Logan is my non-Canadian idol.'},
        {style: 'description', text: 'The phone <em>rings</em>.  Anthony goes to--'},
        {style: 'subheader', text: 'the sales counter'},
        {style: 'description', text: 'And answers the phone.'},
        {style: 'character', text: 'Anthony'},
        {style: 'dialog', text: 'Writers Store, Anthony speaking.'},
        {style: 'character', text: 'voice'},
        {style: 'parenthetical', text: '(over phone)'},
        {style: 'dialog', text: 'Do you have \'Chinatown\' in stock?'},

        {style: 'slugline', text: '3. I/E luxurious malibu mansion - day'},
        {style: 'description', text: 'A <em>figure</em> roams his estate, cell phone pressed to his ear.'},
        {style: 'character', text: 'Anthony <span class=\'extension\'>(o.s.)</span>'},
        {style: 'dialog', text: 'Course we have \'Chinatown\'! Robert Towne\'s masterpiece is arguabley the Great American Screenplay...'},
        {style: 'continued', text: '(more)'},
    ]
}
function getNoPage() {

    var scene = []
    for (var i=1; i<=54; i++) {
        scene.push({style: '', text: i.toString()})
    }
    return scene
}
