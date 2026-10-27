"use client";
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
	children?: ReactNode;
}

interface State {
	hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(_: Error): State {
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Uncaught runtime error:", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				<div
					data-testid="error-boundary-fallback"
					style={{
						padding: "4rem",
						textAlign: "center",
						fontFamily: "sans-serif",
					}}>
					<h2>Something went wrong.</h2>
					<p>
						We are experiencing technical difficulties. Please refresh the page.
					</p>
				</div>
			);
		}
		return this.props.children;
	}
}
