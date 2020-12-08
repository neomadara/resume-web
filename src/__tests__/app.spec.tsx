import React from 'react'
import { render, queryByAttribute, RenderResult, cleanup, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import mockedAxios from "../__mocks__/axios";
import App from '../App'
import ResumeData from "../__mocks__/resumeData";

const getById = queryByAttribute.bind(null, 'id')
let dom: RenderResult;

afterEach(cleanup);

describe('Resume render', () => {
    test('should have resume data', async () => {
        act(() => {
            mockedAxios.get.mockResolvedValueOnce({
                data: ResumeData
            });
            dom = render(<App />);
        })
        await waitFor(() => {
            dom.getByText('Presentación')
        })
        expect(dom.getByText('Presentación')).toBeInTheDocument()
        const presentationText = getById(dom.container, 'presentation')
        expect(presentationText!.innerHTML.length > 0).toBe(true)
        expect(dom.getByText('Experiencia laboral')).toBeInTheDocument()
        expect(dom.getByText('Tecnologias')).toBeInTheDocument()
        expect(dom.getByText('Educación')).toBeInTheDocument()
        expect(dom.getByText('Intereses')).toBeInTheDocument()
    })
})
