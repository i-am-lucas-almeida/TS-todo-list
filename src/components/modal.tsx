import * as React from 'react';

import { AiFillCloseCircle } from 'react-icons/ai';

export interface Props {
    children: React.ReactNode
}

export default function Modal({ children }: Props) {

    const closeModal = (): void => {

        const modal = document.getElementById('modal');

        modal?.classList.add('hide');

    }

    return (

        <div id='modal' className='hide'>

            <div className="modal__fade">

                <div className='modal__content'>

                    <AiFillCloseCircle
                        className='button__close'
                        onClick={closeModal}
                    />

                    <h2>Editar tarefa:</h2>

                    {children}

                </div>

            </div>

        </div>

    );
}
