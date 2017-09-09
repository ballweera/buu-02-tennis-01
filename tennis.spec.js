function TennisGame() {
    const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forty']
    playerAScore = 0
    playerBScore = 0

    this.reset = () => {
        playerAScore = 0
        playerBScore = 0
    }

    this.echo = () => {
       return `${scoreString[playerAScore]} - ${scoreString[playerBScore]}`
    }

    this.playerAGetScore = () => {
        playerAScore++
    }

    this.playerBGetScore = () => {
        playerBScore++
    }
}

describe('echo()', () => {
    let app

    beforeEach(() => {
        app = new TennisGame()
        app.reset()
    })

    test('Echo "Love - Love" when game start', () => {
        // Act
        let result = app.echo()

        // Assert
        expect(result).toBe('Love - Love')
    })

    test('Echo "Love - Fifteen" when playerB get first score', () => {
        app.playerAGetScore()

        let result = app.echo()

        expect(result).toBe('Fifteen - Love')
    })

    test('Echo "Thirty - Fifteen" when score is 30 - 15', () => {
        app.playerAGetScore()
        app.playerAGetScore()
        app.playerBGetScore()

        let result = app.echo()

        expect(result).toBe('Thirty - Fifteen')

    })
    
})

// test('Echo "Love - Love" when game start', () => {
//     // Arrange
//     let app = new TennisGame()

//     // Act
//     app.reset()
//     let result = app.echo()

//     // Assert
//     expect(result).toBe('Love - Love')
// })

// test('Echo "Love - Fifteen" when playerB get first score', () => {
//     let app = new TennisGame()
//     app.reset()
//     app.playerAGetScore()

//     let result = app.echo()

//     expect(result).toBe('Fifteen - Love')
// })

// test('Echo "Thirty - Fifteen" when score is 30 - 15', () => {
//     let app = new TennisGame()
//     app.reset()
//     app.playerAGetScore()
//     app.playerAGetScore()
//     app.playerBGetScore()

//     let result = app.echo()

//     expect(result).toBe('Thirty - Fifteen')

// })
















