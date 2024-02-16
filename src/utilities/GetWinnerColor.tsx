export function getWinnerColor(winner:number) { 
    
    if (winner == 0) { 
        return ` hover:text-paper-gradient`;
    }
    else if (winner == 1) { 
        return `hover:text-scissors-gradient `;
    }
    else if (winner == 2)  { 
        return `hover:text-rock-gradient `
    }
    
}