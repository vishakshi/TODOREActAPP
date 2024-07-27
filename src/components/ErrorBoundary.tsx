import styled from "@emotion/styled";
import {
  DataObjectRounded,
  DeleteForeverRounded,
  DescriptionRounded,
  ErrorOutlineRounded,
  ExpandMoreRounded,
  FileDownload,
  RefreshRounded,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
  Typography,
} from "@mui/material";
import { Emoji } from "emoji-picker-react";
import React, { ErrorInfo } from "react";
import { TaskIcon } from ".";
import { UserContext } from "../contexts/UserContext";
import { StyledLink } from "../styles";
import { exportTasksToJson, getFontColor, showToast } from "../utils";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary component that catches and displays errors.
 */

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static contextType = UserContext;
  declare context: React.ContextType<typeof UserContext>;
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
  }

  handleClearData() {
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
  }

 
             

const Container = styled.div`
  margin: 0 8vw;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const ErrorIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

const ErrorHeader = styled.h1`
  margin-top: 32px;
  margin-bottom: 32px;
  font-size: 36px;
  color: #ff3131;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    text-align: left;
    justify-content: left;
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const ErrorAccordion = styled(Accordion)`
  color: ${({ theme }) => getFontColor(theme.secondary)};
  border-radius: 14px !important;
  background: ${({ theme }) => getFontColor(theme.secondary)}18;
  box-shadow: none;
  padding: 4px;
  margin-bottom: 18px;
`;

const ErrorExpandIcon = styled(ExpandMoreRounded)`
  color: ${({ theme }) => getFontColor(theme.secondary)};
  font-size: 32px;
`;

const StyledButton = styled(Button)`
  padding: 10px 30px;
  border-radius: 12px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
StyledButton.defaultProps = {
  variant: "outlined",
  size: "large",
};

const UserDataLabel = styled.p`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0;
`;

export default ErrorBoundary;
