package br.gov.sp.fatec.egammer.domain.desenvolvedora;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import br.gov.sp.fatec.egammer.util.View;

@Entity
@Table(name = "DESENVOLVEDORA") 
public class Desenvolvedora {
	
	@Id 
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "des_codigo")
	@JsonView( {View.Desenvolvedora.class, View.Game.class})
	private Long codigo;
	
	@Column(name = "des_studio",  nullable = false)
	@JsonView( {View.Desenvolvedora.class, View.Game.class})
	private String studio;
	
	@Column(name = "des_distribuidora",  nullable = false)
	@JsonView( {View.Desenvolvedora.class, View.Game.class})
	private String distribuidora;
	
	public Desenvolvedora() {}
	

	public Desenvolvedora(Long codigo, String studio, String distribuidora) {
		this.codigo = codigo;
		this.studio = studio;
		this.distribuidora = distribuidora;
	}
	
	public String getStudio() {
		return studio;
	}

	public void setStudio(String studio) {
		this.studio = studio;
	}

	public String getDistribuidora() {
		return distribuidora;
	}

	public void setDistribuidora(String distribuidora) {
		this.distribuidora = distribuidora;
	}

	public Long getCodigo() {
		return codigo;
	}
	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}
}
