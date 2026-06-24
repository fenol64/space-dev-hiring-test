import styled from "styled-components";

const StakeCountWrapper = styled.div`
margin-bottom: 20px;
    .error_message {
        position: relative;
        display: inline-flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        p{
            position: relative;
            width: 100%;
            float: right;
            font-size: 12px;
            color: red;
            margin: 0 0 0 calc(15px + 70%);
        }
    }
    .miner-container {
        position: relative;
        display: inline-flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        .tooltip_header_text {
            padding-left: 15px;
            width: 70%;
            font-size: 19px;
            display: flex;
            text-align: center;
            align-items: center;
            h3{
                margin-right: 5px;
            }
            .tooltip{
                justify-content: center;
                align-items: center;
                text-align:center;
            }
        }
        .max_button {
            height: 35px;
            padding: 0 10px;
            background-color: #BA3505;
            border: 1px solid #FE9C01;
            font-weight: bold;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            color: white;
            cursor: pointer;
        }

        .count_input {
            width: 17%;
            height: 35px;
            padding: 0 10px;
            border: 2px solid #fff;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            outline: none;
            font-size: 16px;
            transition: border-color 0.3s ease;
            color: #000;
        }

        .count_input:focus {
            border-color: #000;
        }

    }
`;

export default StakeCountWrapper;
