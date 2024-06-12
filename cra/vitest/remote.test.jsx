import React from "react";
import { expect,describe,it } from "vitest";
import Bucket from "../remote/src/Bucket/Bucket.js";
import { render,screen,act } from '@testing-library/react';


describe('remoteTest', async () => {
    it('bucket test', async () => {
        await act(async () => {
            render(<Bucket />);
        })
        const buttonElement = screen.getByText("Upload");
        expect(buttonElement).toHaveProperty("innerHTML","Upload")
    })
});