package br.gov.sp.fatec.egammer.authentication;

import java.util.Collection;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import br.gov.sp.fatec.egammer.domain.autorizacao.Autorizacao;


public class JwtAuthentication implements Authentication {

	private static final long serialVersionUID = -1023819529037306111L;

	private String name;
	private Collection<Autorizacao> authorities;
	private Object credentials;
	private Object details;
	private Object principal;
	private boolean authenticated;
	
	public JwtAuthentication() {
	}
	
	@Override
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.authorities;
	}

	@Override
	public Object getCredentials() {
		return this.credentials;
	}
	
	public void setCredentials(Object credentials) {
		this.credentials = credentials;
	}

	@Override
	public Object getDetails() {
		return this.details;
	}
	
	public void setDetails(Object details) {
		
		this.details = details;
	}

	@Override
	public Object getPrincipal() {
		return this.principal;
	}
	
	public void setPrincipal(Object principal) {
		this.principal = principal;
	}

	@Override
	public boolean isAuthenticated() {
		return this.authenticated;
	}

	@Override
	public void setAuthenticated(boolean authenticated) throws IllegalArgumentException {
		this.authenticated = authenticated;
	}

}
