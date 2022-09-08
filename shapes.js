const lShape = {
                matrix:[[0,0,1],
                        [1,1,1],
                        [0,0,0]],
                styleProp:{
                    'position': 'absolute',
                    'display': 'grid',
                    'grid-template-columns': 'auto auto auto',
                    'grid-row': 'auto',
                    'width': '90px',
                    'height': '90px'
                }
}

const iShape =  {
                matrix: [
                        [0,0,0,0,],
                        [1,1,1,1],
                        [0,0,0,0]],
                styleProp: {
                    'position': 'absolute',
                    'display': 'grid',
                    'grid-template-columns': 'auto auto auto auto',
                    'grid-row': 'auto',
                    'width': '90px',
                    'height': '90px'
                }
}

const sShape = {
                matrix:[[1,1,0],
                        [0,1,1],
                        [0,0,0]],
                styleProp: {
                    'position': 'absolute',
                    'display': 'grid',
                    'grid-template-columns': 'auto auto auto',
                    'grid-row': 'auto',
                    'width': '90px',
                    'height': '90px'
                }
}
const tShape = {
                matrix:[[0,1,0],
                        [1,1,1],
                        [0,0,0]],
                styleProp:{
                    'position': 'absolute',
                    'display': 'grid',
                    'grid-template-columns': 'auto auto auto',
                    'grid-row': 'auto',
                    'width': '90px',
                    'height': '90px'
                }
}


export {iShape, lShape, sShape, tShape}